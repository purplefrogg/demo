import React, { FC, useState } from 'react';
import style from './Paginator.module.scss'

type PropsType = {
	page: number
	count: number
	totalCount: number
	portionSize?: number

	onPageChanged: (pageNumber: number) => void
}

const Paginator: FC<PropsType> = ({count, totalCount, portionSize=10, page, onPageChanged}) => {
	let [portionNumber, setPortionNumber] = useState(Math.ceil(page / portionSize))

	let pagesCount = Math.ceil(totalCount / count)
	let pages: Array<number> = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize
	return (
		<div>
			{portionNumber > 1 &&
				<button onClick={() => setPortionNumber(portionNumber - 1)}>{'<<<'}</button>}
			{pages
			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
			.map(p => <span key={p} onClick={() => { onPageChanged(p) }} className={p === page ? style.selectedPage : ""}>{p} </span>)}
			{portionCount > portionNumber &&
			<button onClick={() => setPortionNumber(portionNumber + 1)}>{'>>>'}</button>}
		</div>
	)
	}
export default Paginator;
