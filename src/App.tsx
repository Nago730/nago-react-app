import './App.css';
import { useState } from 'nago-react';

function shuffleArray(array: any[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function App() {
	const [count, setCount] = useState(0);
	const [open, setOpen] = useState(false);
	const [isReverse, setIsReverse] = useState(false);

	const handle = () => setCount((prev) => prev + 1);
	const handleModal = () => setOpen((prev) => !prev);
	const handleReverse = () => setIsReverse((prev) => !prev);

	return (
		<div className='test-app-container'>
			<span className='count-display'>{count}</span>
			<button className='app-button primary' onclick={handle}>
				부모 버튼
			</button>
			<button className='app-button secondary' onclick={handleModal}>
				모달 토글 버튼
			</button>
			<button className='app-button secondary' onclick={handleReverse}>
				컴포넌트 섞기 버튼
			</button>
			{isReverse ? (
				<>
					<InnerCounter key={'first'} />
					<InnerCounter key={'second'} />
				</>
			) : (
				<>
					<InnerCounter key={'second'} />
					<InnerCounter key={'first'} />
				</>
			)}
			{open && <Modal onClose={handleModal} />}
		</div>
	);
}

function InnerCounter() {
	const [count, setCount] = useState(0);
	const handle = () => setCount((prev) => prev + 1);

	return (
		<div className='inner-counter-container'>
			<span className='inner-count-display'>{count}</span>
			<button className='inner-button' onclick={handle}>
				<div>자식 버튼</div>
			</button>
			<span>부모의 상태가 변경되어도 변하지 않음</span>
		</div>
	);
}

function Modal({ onClose }) {
	const [innerCount, setInnerCount] = useState(0);

	const handleInnerCount = () => setInnerCount((prev) => prev + 1);

	return (
		<>
			<div className='modal-overlay'></div>
			<div className='modal-container'>
				<button className='inner-button' onclick={handleInnerCount}>
					{'카운트 증가 버튼'}
				</button>
				<div className='modal-content'>{`모달 내부 카운트: ${innerCount}`}</div>
				<button className='modal-button' onclick={onClose}>
					모달 닫기
				</button>
			</div>
		</>
	);
}

export default App;
