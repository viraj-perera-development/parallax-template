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
import { Link } from 'react-router-dom';


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
  const [prevSearchQuery, setPrevSearchQuery] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://crm.careholding.it/ws/Call/?Cat=Blog&met=GetPostsBlog&np=0`);
        setPosts([...res.data].sort((a, b) => new Date(b.Ordine) - new Date(a.Ordine)));
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
        setPosts1([...res.data].sort((a, b) => new Date(b.Ordine) - new Date(a.Ordine)));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   // Filter posts based on search query
  //   const filtered = filteredPosts.filter(post => {
  //     return post.Titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //            post.Subtitle.toLowerCase().includes(searchQuery.toLowerCase());
  //   });
  //   setFilteredPosts(filtered);

  // }, [searchQuery, posts]);

  useEffect(() => {
    // Filter posts based on search query
    const filtered = selectedSubOption === 0 ? posts.filter(post => {
      return post.Titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
             post.Subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    }) : posts1.filter(post => {
      return post.Titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
             post.Subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    // If search query is empty and no sub-option is selected, restore original posts
    if (searchQuery.trim() === '' && selectedSubOption === 0) {
      // setFilteredPosts(posts);
    } else if (searchQuery.trim() === '' && selectedSubOption === 1) {
      // setFilteredPosts(posts1);
    } else {
      // Check if the current search query is shorter than the previous one
      if (searchQuery.length < prevSearchQuery.length) {
        // Restore the filtered posts progressively as the user deletes characters
        const restored = filteredPosts.filter(post => {
          return post.Titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 post.Subtitle.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredPosts(restored);
      } else {
        setFilteredPosts(filtered);
      }
    }
    
    // Update previous search query
    setPrevSearchQuery(searchQuery);
  }, [searchQuery, posts, prevSearchQuery, filteredPosts, selectedSubOption, posts1]);

  
  const handleFilterClick = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleOptionSelect = (option) => {

    if(option === 'Tutti' && selectedSubOption === 0){
      setFilteredPosts(posts);
    }else if(option === 'Tutti' && selectedSubOption === 1){
      setFilteredPosts(posts1);
    }else if(option === 'Recenti'){
      setFilteredPosts([...filteredPosts].sort((a, b) => new Date(b.DataInserimento) - new Date(a.DataInserimento)));
    }else if(option === 'Più Popolari'){
      setFilteredPosts([...filteredPosts].sort((a, b) => new Date(b.Rel) - new Date(a.Rel)));
    }else if(option === 'Più Condivisi'){
      setFilteredPosts([...filteredPosts].sort((a, b) => new Date(b.Share) - new Date(a.Share)));
    }else if(selectedSubOption === 1 && option !== 'Tutti'){
      const filtered = posts1.filter((post) => post.CategoryName === option);
      setFilteredPosts(filtered);
    }

    setShowFilterDropdown(false);
  };

  const handleSubOptionSelect = (option) => {
    setSelectedSubOption(option);
    if(option === 0){
      setSelectedSubOption(0);
      setFilteredOptions(filterOptions);
      setFilteredPosts(posts);
    }else if(option === 1){
      setSelectedSubOption(1);
      const uniqueCategories = [...new Set(posts1.map(post => post.CategoryName))];
      const uniqueCategoriesWithTutti = ['Tutti', ...uniqueCategories];
      setFilteredOptions(uniqueCategoriesWithTutti);
      setFilteredPosts(posts1);
    }
  };

  function formatToUrlFriendly(text) {
    const cleanedText = text
      .toLowerCase() // Convert to lowercase
      .replace(/ /g, '-') // Replace spaces with hyphens
      .replace(/[àáâãäå]/g, 'a') // Replace "à", "á", "â", "ã", "ä", "å" with "a"
      .replace(/[èéêë]/g, 'e') // Replace "è", "é", "ê", "ë" with "e"
      .replace(/[ìíîï]/g, 'i') // Replace "ì", "í", "î", "ï" with "i"
      .replace(/[òóôõö]/g, 'o') // Replace "ò", "ó", "ô", "õ", "ö" with "o"
      .replace(/[ùúûü]/g, 'u') // Replace "ù", "ú", "û", "ü" with "u"
      .replace(/[^a-z0-9-_+]/g, '-') // Remove special characters except hyphens and alphanumeric characters
      .replace(/-{2,}/g, '-'); // Remove consecutive hyphens

        if (cleanedText.endsWith('-')) {
            return cleanedText.slice(0, -1);  
    }return cleanedText;
  }


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
        
        <div className='mt-16 w-11/12 md:w-7/12'>
        {filteredPosts.slice(0, visiblePosts).map(post => {
              if (post.Stato === 1){
                return(
                <div key={post.Id} className='faq-item border-b-[0.5px] border-neutral-800 p-4 mb-4'>
                  <div className="flex items-center justify-start text-start grayscale hover:grayscale-0 transition duration-1000 ease-in-out">
                    <div className="max-w-md flex-shrink-0">
                      <img src={post.ImgCopertina} alt="Image" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="mx-20">
                      <h2 className="font-semibold text-slate-50 uppercase text-2xl">{post.Titolo}</h2>
                      <p className="text-md mt-2 text-slate-50 mb-6">{post.Subtitle}</p>
                      <Link to={`/notizie/${selectedSubOption === 0 ? 'approfondimenti' : 'rassegna-stampa'}/${post.Id}/${formatToUrlFriendly(post.Metatitle)}`} className="px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out">Leggi di più</Link>
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
