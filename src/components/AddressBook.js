/* eslint-disable  */
/* eslint-disable  */
import React from "react";
import AddressItem from './AddressItem';

const addressBook = [
	{ id: 1, name: "윤수" },
	{ id: 2, name: "미영" },
	{ id: 3, name: "지혜" },
	{ id: 4, name: "혁수" },
];
// 1. 입력을 감지한다.
// 2. "추가"버튼 클릭을 감지한다.
// 3. "추가"버튼 클릭시 입력된 값을 address State에 반영시킨다.

export default function AddressBook(props) {
	// input에 새로운 이름 추가 --> 리스트 반영
	const [address, setAddress] = React.useState(addressBook);
  const [newName, setNewName] = React.useState("");
	const [idCount, setIdCount] = React.useState(5);

  const [searchKwd, setSearchKwd] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

	// console.warn(newName);
	const onAdd = React.useCallback(
		e => {
			// address를 추가
			const newAddress = address.concat([{ id: idCount, name: newName }]);
			setIdCount(idCount + 1);
			setAddress(newAddress);
			setNewName("");
		},
		[idCount, newName, address],
	);
	const onChange = React.useCallback(e => {
		setNewName(e.target.value);
	}, []);

  React.useEffect(()=>{
    const searchResult = address.filter((item)=>{
      return item.name.startsWith(searchKwd)
    });
    setSearchResult(searchResult);
  }, [searchKwd, address]);

	return (
		<div>
			<input onChange={onChange} value={newName} />
			<button type="button" onClick={onAdd}>
				추가
			</button>
			<ul>
				{searchResult.map(elem => {
					return (
						<AddressItem 
              key={elem.id} elem={elem} 
              address={address} 
              setAddress={setAddress} />
					);
				})}
			</ul>
			{/* 문제3. 입력할때마다 검색하기: String.startsWith함수 사용. */}
			<input type="text" value={searchKwd} onChange={e=>{
        setSearchKwd(e.target.value);
      }}/>
		</div>
	);
}
