import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


const pageKey = `page-${location.pathname}`;

export const usePages = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(sessionStorage.getItem(pageKey)? sessionStorage.getItem(pageKey) : 1);

    console.log('CURRENT PAGE - ')
    useEffect(() => {
        // Генерируем уникальный ключ на основе пути
        //const pageKey = `page-${location.pathname}`;
    
        // Загружаем состояние пагинации из sessionStorage
        const savedPage = sessionStorage.getItem(pageKey);
        if (savedPage) {
          setCurrentPage(Number(savedPage));
        }
    
        return () => {
          // Сохраняем состояние пагинации в sessionStorage при размонтировании компонента
          sessionStorage.setItem(pageKey, currentPage.toString());
        };
      }, []);

      useEffect(() => {
        // Генерируем уникальный ключ на основе пути
        //const pageKey = `page-${location.pathname}`;
    
        
        return () => {
          // Сохраняем состояние пагинации в sessionStorage при размонтировании компонента
          sessionStorage.setItem(pageKey, currentPage.toString());
        };


      }, [currentPage]);


  return [currentPage, setCurrentPage];
}
