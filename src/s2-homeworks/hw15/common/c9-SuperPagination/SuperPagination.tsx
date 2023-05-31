import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const [count,setCount]=useState(itemsCountForPage)
    const lastPage = Math.ceil(totalCount/count) // пишет студент // вычислить количество страниц
    // const lastPage = 10 // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: React.ChangeEvent<unknown>,  page: number) => {
        // пишет студент
        const target = event.currentTarget as HTMLSelectElement;
        console.log('Page', page, target.value, count);
        onChange(page, count);
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        console.log('event',event.currentTarget.value)
        setCount(+event.currentTarget.value)
        onChange(page,+event.currentTarget.value)
        // onChangeCallback(event, page)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                shape="rounded"
                color="primary"
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                style={{width:'40px'}}
                id={id + '-pagination-select'}
                value={count}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
