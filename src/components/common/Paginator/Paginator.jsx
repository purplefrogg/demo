import React, { useState } from 'react';

import style from './Paginator.module.scss'

let Paginator = ({count, totalCount, portionSize=10, page, onPageChanged}) => {
	let [portionNumber, setPortionNumber] = useState(Math.ceil(page / portionSize))
	//let [portionNumber, setPortionNumber] = useState(1)

	let pagesCount = Math.ceil(totalCount / count)
	let pages = []
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
			.map(p => <span key={p} onClick={() => { onPageChanged(p) }} className={p === page ? style.selectedPage : null}>{p} </span>)}
			{portionCount > portionNumber &&
			<button onClick={() => setPortionNumber(portionNumber + 1)}>{'>>>'}</button>}
		</div>
	)
	}
export default Paginator;
