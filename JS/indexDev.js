const API_Key='3be3d6dd065ee48dfb2031484964fdac';
const SearchField=document.getElementById('search_field');
const SearchButton=document.getElementById('search')
const City_Name=document.getElementById('cityname');
const city_Temp=document.getElementById('citytemp');
const Weather=document.getElementById('weather');



const LoadTemperature=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
   try{
        const Res= await fetch(url);
        const Data=await Res.json();
        setData(Data);
   }catch(er){
     console.log("Error: "+er);
     setErrorData();
   }
}

const setErrorData=()=>{
    City_Name.innerHTML="Wrong City Name";
    Weather.innerHTML="";
    city_Temp.innerHTML="";
}
const setData=Data=>{
    console.log(Data);
    City_Name.innerHTML=Data.name;
    Weather.innerHTML=Data.weather[0].main
    city_Temp.innerHTML=Data.main.temp;
    console.log("Weather: "+Data.weather[0].main)
    console.log("Temperature: "+ Data.main.temp);

   // SetInnerTextByID
}

///Not work 
const SetInnerTextByID=(id,text)=>{
    document.getElementById(id).innerText=text;
}

const Searching=()=>{
    const SearchText=SearchField.value;
    console.log(SearchText)
    LoadTemperature(SearchText)
}

SearchButton.addEventListener('click',()=>{
    console.log('Search Button')
    Searching();
})

document.getElementById('search_field').addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        console.log("Enter")
        Searching();
    }
})