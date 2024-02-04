import React, { useState } from "react";
import ToggleButton from "../ToggleButton";
import SearchBox from "../SearchBox";
import { Outlet} from "react-router-dom"
import ChatList from "../ChatList";
interface ProfileProps {
  theme?: string;
}

const Chat: React.FC<ProfileProps> = ({ theme }) => {

  const [searchQuery, setSearchQuery] = useState<string>("");
    const chat = [
    {
      id:'1',
      name:'User0215784515',
      date:'Yesterday',
      time:'07:45 pm',
      content:'Can you call me? It’s necessary to talk wit...',
    },
    {
      id:'2',
      name:'User0215784516',
      date:'2024/01/18',
      time:'06:33 pm',
      content:'Can you call me? It’s necessary to talk wit...',
    },
    {
      id:'3',
      name:'User0215784517',
      date:'2024/01/17',
      time:'06:25 pm',
      content:'Can you call me? It’s necessary to talk wit...',
    },
    {
      id:'4',
      name:'User0215784518',
      date:'2024/01/16',
      time:'06:15 pm',
      content:'Can you call me? It’s necessary to talk wit...',
    },
    {
      id:'5',
      name:'User0215784519',
      date:'2024/01/15',
      time:'05:15 pm',
      content:'Can you call me? It’s necessary to talk wit...',
    },
  ];
  const filteredData = chat.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.date.toLowerCase().includes(searchQuery.toLowerCase()) || item.content.toLowerCase().includes(searchQuery.toLowerCase()));




  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
    <div className={`${theme}-ContactsView-Container`}>
      <Outlet></Outlet>
      <p className={`${theme}-ContactsView-contactText `}>Chats</p>
      <div className={`${theme}-ContactsView-buttonsContainer `}>
        <ToggleButton onButtonClick={() =>{}} leftText="Visitors Chat History" rightText="Your Test History" theme="Carbon" />
      </div>
      <div className="mt-8 mx-6">
        <SearchBox  inputHeight="56px" onChange={handleSearchChange} value={searchQuery} theme="Carbon" placeholder="Search name or email..." />
      </div>
      {!(filteredData.length > 0) ? (
        <div className={`${theme}-ContactsView-box w-[100%] mt-[20px]`}>
          <div data-testid="input-container" className={` w-[100%]  ${theme}-ContactsView-innerBox`}>
            No contact yet
          </div>
        </div>
      ) : (
        <ChatList  data={filteredData} theme={theme} />
      )}

      {/* <Footer activeItem={menu} onItemChange={(element) => {
        setMenu(element)
        resolveNavigation(element,navigate)
      }} theme="Carbon"/> */}
      
    </div>
    </>
  );
};

export default Chat;
