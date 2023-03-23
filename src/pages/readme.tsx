import React from 'react'
import ReactDOM from 'react-dom'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { ComponentWrapper, ContentWrapper, PageWrapper } from '@/pages'
import { Nav } from '@/pages/nav'

// 애플리케이션 상태를 모델링합니다.
class Timer {
	secondsPassed = 0

	constructor() {
		makeAutoObservable(this)
	}

	increase() {
		this.secondsPassed += 1
	}

	reset() {
		this.secondsPassed = 0
	}
}

const myTimer = new Timer()

// observable state를 사용하는 사용자 인터페이스를 구축합니다.
const TimerView = observer(({ timer }) => (
	<button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))

// 매초마다 Seconds passed: X를 업데이트 합니다.
setInterval(() => {
	myTimer.increase()
}, 1000)

export default function MobXPage() {
	return (
		<PageWrapper>
			<Nav />
			<ContentWrapper>
				<h1>Timer</h1>
				<TimerView timer={myTimer} />
			</ContentWrapper>
		</PageWrapper>
	)
}
