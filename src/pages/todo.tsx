import React, { useState } from 'react';

export default function Todo() {
  const [inputText, setInputText] = useState<string>('');
  const [unDoneTask, setUnDoneTask] = useState<string[]>([]);
  const [doneTask, setDoneTask] = useState<string[]>([]);

  const onChangeText = (e: { target: { value: string } }) => {
    setInputText(e.target.value);
  };

  const onSubmit = () => {
    setUnDoneTask([...unDoneTask, inputText]);
    setInputText('');
  };

  const onTaskDone = (index: number) => {
    setDoneTask([...doneTask, unDoneTask[index]]);
    unDoneTask.splice(index);
  };

  const onUnDoneTaskDelete = (target: string) => {
    setUnDoneTask(unDoneTask.filter((task) => task !== target));
  };

  const onDoneTaskDelete = (target: string) => {
    setDoneTask(doneTask.filter((task) => task !== target));
  };

  return (
    <>
      <div>
        <input type="text" placeholder="todo" onChange={onChangeText} />
        <button className="bg-red-300 px-2 py-1 rounded-md" onClick={onSubmit}>
          登録する
        </button>
      </div>
      <div>
        <h1 className="font-bold text-lg">未完了</h1>
        <ul>
          {unDoneTask.map((value, index) => (
            <div className="flex mb-2" key={index}>
              <li>{value}</li>
              <button
                className="ml-2 bg-pink-300 px-2 py-1 rounded-md"
                onClick={() => onTaskDone(index)}
              >
                完了
              </button>
              <button
                className="ml-2 bg-red-500 px-2 py-1 rounded-md"
                onClick={() => onUnDoneTaskDelete(unDoneTask[index])}
              >
                削除
              </button>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-lg">完了</h1>
        <ul>
          {doneTask.map((value, index) => (
            <div className="flex mb-2" key={index}>
              <li>{value}</li>
              <button
                className="ml-2 bg-red-500 px-2 py-1 rounded-md"
                onClick={() => onDoneTaskDelete(doneTask[index])}
              >
                削除
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
