# 如何在React中引用pdf.js库

## 效果图
![pdfjs](/images/pdfjs1.png)
![pdfjs](/images/pdfjs2.png)

## 安装包
```bash
npm install pdfjs-dist
```

## 预览组件封装
```jsx
import React, { useEffect, useState, useRef, useCallback, useImperativeHandle, forwardRef } from 'react';
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// 使用forwardRef包裹函数组件
const PdfViewer = forwardRef((
  {url}, ref
) => {
  const canvasRef = useRef()
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

  const [pdfRef, setPdfRef] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const renderPage = useCallback((pageNum, pdf = pdfRef) => {
    pdf && pdf.getPage(pageNum).then(function(page) {
      const viewport = page.getViewport({scale: 1.5})
      const canvas = canvasRef.current
      canvas.height = viewport.height
      canvas.width = viewport.width
      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      };
      page.render(renderContext)
    })
  }, [pdfRef]);

  useEffect(() => {
    renderPage(currentPage, pdfRef)
  }, [pdfRef, currentPage, renderPage])

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(url)
    loadingTask.promise.then(loadedPdf => {
      setPdfRef(loadedPdf)
    }, function(reason) {
      console.error(reason)
    })
  }, [url]);

  // 使用useImperativeHandle hook暴露父组件需要调用的方法
  useImperativeHandle(ref, () => ({
    nextPage,
    prevPage
  }))

  const nextPage = () => pdfRef && currentPage < pdfRef.numPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return <canvas ref={canvasRef}></canvas>;
})

export default PdfViewer
```

## 使用
```jsx
import { Button, Modal } from 'antd';
import PdfViewer from '@/components/PdfViewer/index';

const [pdfUrl, setPdfUrl] = useState('');

const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};

const refPdf = useRef()

const handleCancel = () => {
  setIsModalOpen(false);
}

const handleNext = () => {
  refPdf.current.nextPage()
};

const handlePrev = () => {
  refPdf.current.prevPage()
};

<Button type="primary" onClick={showModal}>预览PDF</Button>
<Modal title="PDF预览" footer={null} width={950} open={isModalOpen} maskClosable={true} onCancel={handleCancel}>
  <PdfViewer ref={refPdf} url={pdfUrl}></PdfViewer>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Button type="primary" onClick={handlePrev}>上一页</Button>
    <Button type="primary" onClick={handleNext}>下一页</Button>
  </div>
</Modal>
```
