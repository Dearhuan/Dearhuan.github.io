import re,requests,json,pprint,time,datetime
from time import strftime

pattern=re.compile(r'^try{sinajp_15844213244528328543098388435\((.*?)\);}catch\(e\){};')
lasttimes='00:00:00'
year = datetime.datetime.now().strftime('%Y')

res=requests.get('https://gwpre.sina.cn/ncp/foreign?_=1584421324452&callback=sinajp_15844213244528328543098388435')
match=pattern.search(res.text)
if match:
    obj=json.loads(match.group(1))
    resultObj=obj['result']
    times=resultObj['times']  # 截止时间
    timesMatch=re.search(r'截至(\d{2})月(\d{2})日(\d{2})时(\d{2})分',times)
    if timesMatch:
        times=year+'年'+timesMatch.group(1)+'月'+timesMatch.group(2)+'日 '+timesMatch.group(3)+':'+timesMatch.group(4)
        timeStr = year+timesMatch.group(1)+timesMatch.group(2)+'-'+timesMatch.group(3)+timesMatch.group(4)
    
        lasttimes=times
        totalObj=resultObj['total']
        certain=totalObj['certain'] # 累计确诊
        die=totalObj['die']   # 死亡
        recure=totalObj['recure'] # 治愈
        certain_inc=totalObj['certain_inc'] # 确诊增加
        die_inc=totalObj['die_inc'] # 死亡增加
        recure_inc=totalObj['recure_inc'] # 治愈增加
        # 各国数据列表
        worldlistArr=resultObj['worldlist']
        worldlistArr.sort(key=lambda x: int(x.get('conNum','0')),reverse=True)
        
        f=open('./docs/others/'+ timeStr +'.md','a',encoding='utf-8')
        f.writelines('\n# '+times+'\n')
        f.writelines('感染国家总数：'+str(len(worldlistArr))+'\n')
        f.writelines('```\n累计确诊：'+certain.rjust(10,' ')+' 较昨日：'+certain_inc+'\n'+'累计死亡：'+die.rjust(10,' ')+' 较昨日：'+die_inc+'\n'+'累计治愈：'+recure.rjust(10,' ')+' 较昨日：'+recure_inc+'\n```\n')

        # 写入echarts横向柱状图
        countrys = []
        conadds = []
        conNums = []
        deathadds = []
        cureNums = []
        deathNums = []

        countrys_second = []
        conadds_second = []
        conNums_second = []
        deathadds_second = []
        cureNums_second = []
        deathNums_second = []

        countrys_third = []
        conadds_third = []
        conNums_third = []
        deathadds_third = []
        cureNums_third = []
        deathNums_third = []

        countrys_last = []
        conadds_last = []
        conNums_last = []
        deathadds_last = []
        cureNums_last = []
        deathNums_last = []

        worldlistArr.reverse()

        for item in worldlistArr[190:]: 
          if item['name'] =='中国':
            continue
          countrys.append(item['name'])
          conadds.append((item['conadd']))
          conNums.append((item['conNum']))
          deathadds.append((item['deathadd']))
          cureNums.append((item['cureNum']))
          deathNums.append((item['deathNum']))

        for item in worldlistArr[180:190]: 
          if item['name'] =='中国':
            continue
          countrys_second.append(item['name'])
          conadds_second.append((item['conadd']))
          conNums_second.append((item['conNum']))
          deathadds_second.append((item['deathadd']))
          cureNums_second.append((item['cureNum']))
          deathNums_second.append((item['deathNum']))

        for item in worldlistArr[170:180]: 
          if item['name'] =='中国':
            continue
          countrys_third.append(item['name'])
          conadds_third.append((item['conadd']))
          conNums_third.append((item['conNum']))
          deathadds_third.append((item['deathadd']))
          cureNums_third.append((item['cureNum']))
          deathNums_third.append((item['deathNum']))

        for item in worldlistArr[0:170]: 
          if item['name'] =='中国':
            continue
          countrys_last.append(item['name'])
          conadds_last.append((item['conadd']))
          conNums_last.append((item['conNum']))
          deathadds_last.append((item['deathadd']))
          cureNums_last.append((item['cureNum']))
          deathNums_last.append((item['deathNum']))

        print(countrys)
        print(conNums)
        print(cureNums)
        print(deathNums)

        f.writelines('\n<div id="main" style="width:100%;height:800px;margin-bottom:10px;"></div>\n')
        f.writelines('\n<div id="second" style="width:100%;height:1000px;margin-bottom:10px;"></div>\n')
        f.writelines('\n<div id="third" style="width:100%;height:1000px;margin-bottom:10px;"></div>\n')
        f.writelines('\n<div id="last" style="width:100%;height:3000px;"></div>\n')
        f.writelines('\n')
        f.writelines('<script>\n')
        f.writelines('import * as echarts from "echarts";\n')
        f.writelines('export default {\n')
        f.writelines('mounted() {\n')
        f.writelines('this.chart = echarts.init(document.getElementById("main"),"dark")\n')
        f.writelines('this.secondChart = echarts.init(document.getElementById("second"),"dark")\n')
        f.writelines('this.thirdChart = echarts.init(document.getElementById("third"),"dark")\n')
        f.writelines('this.lastChart = echarts.init(document.getElementById("last"),"dark")\n')

        f.writelines('var option = {\n')
        f.writelines('tooltip: {trigger: "axis",axisPointer: {type: "shadow"}},\n')
        f.writelines('legend: {},\n')
        f.writelines('grid: {left: "3%",right: "4%",bottom: "3%",containLabel: true},\n')
        f.writelines('xAxis: {type: "value"},\n')
        f.writelines('yAxis: {type: "category",data: [\n')
        for country in countrys: 
          f.writelines("'"+  country +"',")
        f.writelines(']},\n')
        f.writelines('series: [\n')
        f.writelines('{name: "新增确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conadds) +']},')
        f.writelines('{name: "累计确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conNums) +']},')
        f.writelines('{name: "新增死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathadds) +']},')
        f.writelines('{name: "累计死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathNums) +']},')
        f.writelines('{name: "累计治愈",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(cureNums) +']},')
        f.writelines(']}\n')
        f.writelines('this.chart.setOption(option);\n')

        f.writelines('var secondOption = {\n')
        f.writelines('tooltip: {trigger: "axis",axisPointer: {type: "shadow"}},\n')
        f.writelines('legend: {},\n')
        f.writelines('grid: {left: "3%",right: "4%",bottom: "3%",containLabel: true},\n')
        f.writelines('xAxis: {type: "value"},\n')
        f.writelines('yAxis: {type: "category",data: [\n')
        for country in countrys_second: 
          f.writelines("'"+  country +"',")
        f.writelines(']},\n')
        f.writelines('series: [\n')
        f.writelines('{name: "新增确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conadds_second) +']},')
        f.writelines('{name: "累计确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conNums_second) +']},')
        f.writelines('{name: "新增死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathadds_second) +']},')
        f.writelines('{name: "累计死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathNums_second) +']},')
        f.writelines('{name: "累计治愈",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(cureNums_second) +']},')
        f.writelines(']}\n')
        f.writelines('this.secondChart.setOption(secondOption);\n')

        f.writelines('var thirdOption = {\n')
        f.writelines('tooltip: {trigger: "axis",axisPointer: {type: "shadow"}},\n')
        f.writelines('legend: {},\n')
        f.writelines('grid: {left: "3%",right: "4%",bottom: "3%",containLabel: true},\n')
        f.writelines('xAxis: {type: "value"},\n')
        f.writelines('yAxis: {type: "category",data: [\n')
        for country in countrys_third: 
          f.writelines("'"+  country +"',")
        f.writelines(']},\n')
        f.writelines('series: [\n')
        f.writelines('{name: "新增确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conadds_third) +']},')
        f.writelines('{name: "累计确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conNums_third) +']},')
        f.writelines('{name: "新增死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathadds_third) +']},')
        f.writelines('{name: "累计死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathNums_third) +']},')
        f.writelines('{name: "累计治愈",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(cureNums_third) +']},')
        f.writelines(']}\n')
        f.writelines('this.thirdChart.setOption(thirdOption);\n')

        f.writelines('var lastOption = {\n')
        f.writelines('tooltip: {trigger: "axis",axisPointer: {type: "shadow"}},\n')
        f.writelines('legend: {},\n')
        f.writelines('grid: {left: "3%",right: "4%",bottom: "3%",containLabel: true},\n')
        f.writelines('xAxis: {type: "value"},\n')
        f.writelines('yAxis: {type: "category",data: [\n')
        for country in countrys_last: 
          f.writelines("'"+  country +"',")
        f.writelines(']},\n')
        f.writelines('series: [\n')
        f.writelines('{name: "新增确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conadds_last) +']},')
        f.writelines('{name: "累计确诊",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(conNums_last) +']},')
        f.writelines('{name: "新增死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathadds_last) +']},')
        f.writelines('{name: "累计死亡",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(deathNums_last) +']},')
        f.writelines('{name: "累计治愈",type: "bar",stack: "total",label: {show: true},emphasis:{focus: "series"},data: ['+ ','.join(cureNums_last) +']},')
        f.writelines(']}\n')
        f.writelines('this.lastChart.setOption(lastOption);\n')

        f.writelines('}};')
        f.writelines('</script>\n')
        f.writelines('\n')

        # 写入表格
        f.writelines('|国家|新增确诊|累计确诊|新增死亡|累计死亡|累计治愈|'+'\n')
        f.writelines('|:--:|---:|---:|---:|---:|---:|'+'\n')

        worldlistArr.reverse()
        
        for countryObj in worldlistArr:
            name=countryObj['name'] # 国家
            if name=='中国':
                continue
            conadd=countryObj['conadd'] # 新增确诊
            conNum=countryObj['conNum'] # 累计确诊
            deathadd=countryObj['deathadd'] # 新增死亡
            deathNum=countryObj['deathNum'] # 累计死亡
            cureNum=countryObj['cureNum'] # 累计治愈
            f.writelines('|'+name+'|'+conadd+'|'+conNum+'|'+deathadd+'|'+deathNum+'|'+cureNum+'|\n')
        f.close()

    