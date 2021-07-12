import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, modifyTitle] = useState(['제목1', '제목2', '제목3'])

  function clickButton(){ 
    let copyArr = [...title]; 
    {/*ES6의 spread 문법 - 중괄호, 대괄호 제거. 그후에 다시 대괄호 -> 아예 새로운 배열 탄생*/}
    let newArr = title.splice(undefined);
    
    newArr[0] = '제목 변경';
    modifyTitle( newArr );
  }
  return (
    
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ clickButton } id="modify">Modify Button</button>
      <div className="list">
        {/* 짠 구성이 훨씬 더 간단해지고 효율적으로 변했다 */}
        <Post title="props1" content="test1" />
        <Post title="props2" content="test2" />
        <Post title="addClickEvent" content="click the emoticon" />
      </div>

    <Modal name="modalComponent"/>
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
    <h2>모달 제목 </h2>
    <p>날짜</p>
    <p>상세 내용</p>
  </div>
  )
}

function Post(props){
  let [count, modifyCount] = useState(0);
  return(
    <>
    <h3>{ props.title }<span onClick={() => modifyCount(count+1)}>👍</span> {count}</h3>
    <p>{ props.content }</p>
    <p>{ new Date().toLocaleDateString() }</p>
    <hr/>
    </>
  )
}

export default App;
