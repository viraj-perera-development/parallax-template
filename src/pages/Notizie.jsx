import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Static1 from '../components/Static1';
import headerImage from "../assets/staticSection/prodotto3.png";
import { FiSearch } from 'react-icons/fi';
import Footer from '../components/Footer';
import { IoFilterOutline } from 'react-icons/io5';
import { GiNewspaper } from "react-icons/gi";
import axios from 'axios';
import { IoCheckmarkOutline } from "react-icons/io5";


function Notizie() {
  const filterOptions = ['Tutti', 'Recenti', 'Più Popolari', 'Più Condivisi'];
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(null); // State to track which dropdown is open
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(posts);
  const [selectedSubOption, setSelectedSubOption] = useState(0); // Default selected sub option
  const [filteredOptions, setFilteredOptions] = useState(filterOptions);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://crm.careholding.it/ws/Call/?Cat=Blog&met=GetPostsBlog&np=0`);
        setPosts(res.data);
        setFilteredPosts([...res.data].sort((a, b) => new Date(b.Ordine) - new Date(a.Ordine)));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(`https://crm.careholding.it/ws/Call/?Cat=Blog&met=GetPostsRS&np=0`);
        setPosts1(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter posts based on search query
    const filtered = filteredPosts.filter(post => {
      return post.Titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
             post.Subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredPosts(filtered);

  }, [searchQuery, posts]);

  const handleFilterClick = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleOptionSelect = (option) => {

    if(option === 'Tutti'){
      setFilteredPosts(posts);
    }else if(option === 'Recenti'){
      setFilteredPosts([...filteredPosts].sort((a, b) => new Date(b.DataInserimento) - new Date(a.DataInserimento)));
    }else if(option === 'Più Popolari'){
      setFilteredPosts([...filteredPosts].sort((a, b) => new Date(b.Rel) - new Date(a.Rel)));
    }else if(option === 'Più Condivisi'){
      setFilteredPosts([...filteredPosts].sort((a, b) => new Date(b.Share) - new Date(a.Share)));
    }

    setShowFilterDropdown(false);
  };

  const handleSubOptionSelect = (option) => {
    setSelectedSubOption(option);
    if(option === 0){
      setSelectedSubOption(0);
      setFilteredOptions(filterOptions);
    }else if(option === 1){
      setSelectedSubOption(1);
      const uniqueCategories = [...new Set(posts1.map(post => post.CategoryName))];
      setFilteredOptions(uniqueCategories);
      setFilteredPosts(posts1)
    }
  };



  return (
    <div className="">
      <Navbar />
      <Static1 
        headerImage={headerImage}
        logoTransp=''
        title='error sit voluptatem, <br/>accusantium sit.'
        description='accusantium doloremque laudantium, <br/>accusantium doloremque laudantium, totam rem aperiam,<br/> eaque totam rem aperiam, eaque'
        href='/'
        logoPosition='left-[-40vh] top-[-30vh] w-[110vh]'
      />
      <div className='flex flex-col items-center justify-start flex-grow pb-20'>
        <div className='relative mt-20 w-11/12 md:w-1/2'>
          <IoFilterOutline className='search-icon absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' onClick={handleFilterClick}/>
          {showFilterDropdown && (
            <div className='absolute z-40 text-start mt-10 w-full bg-slate-50 shadow-md fadeIn'>
                <div
                className={`flex py-2 px-4 cursor-pointer border-b-[0.5px] border-b-slate-300 text-black bg-gray-200`}
                onClick={() => handleSubOptionSelect(0)}
              >
                Approfondimenti {selectedSubOption === 0 ? <IoCheckmarkOutline className='text-green-700 text-xl ms-2' /> : ''}
              </div>
              <div
                className={`flex py-2 px-4 cursor-pointer border-b-[0.5px] border-b-slate-300 text-black bg-gray-200`}
                onClick={() => handleSubOptionSelect(1)}
              >
                Rassegna Stampa {selectedSubOption === 1 ? <IoCheckmarkOutline className='text-green-700 text-xl ms-2' /> : ''}
              </div>

              {filteredOptions.map((option) => (
                <div
                  key={option}
                  className='py-2 px-4 cursor-pointer border-b-[0.5px]  text-black hover:bg-black hover:text-slate-50'
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          <input 
            type='text' 
            placeholder='Cerca . . .' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='bg-neutral-800 text-slate-50 px-12 py-2 pl-12 focus:outline-none focus:border-blue-500 w-full rounded-lg'
          />
          <FiSearch className='search-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>
        
        <div className='mt-8 w-11/12 md:w-1/2'>
        {filteredPosts.slice(0, visiblePosts).map(post => {
            if (post.Stato === 1){
              return(
                <div key={post.Id} className='faq-item border-b-[0.5px]  border-neutral-800 p-4 mb-4'>
                <div className="flex justify-start text-start">
                  <div className="max-w-md rounded-lg shadow-lg">
                    <div className="flex items- justify-start my-14">
                    {/* <GiNewspaper className='search-icon text-slate-50 text-2xl w-full' /> */}
                      <div className='ms-10'>
                        <h2 className="text-lg font-semibold text-slate-50">{post.Titolo}</h2>
                        <p className="text-sm mt-2 text-slate-50">{post.Subtitle}</p>
                        <button className="mt-5 px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out">Leggi di più</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              )
            }
          }
          )}

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Notizie;
