import axios from 'axios'
let data = null
export const fetchSentimentScore = async(searchText)=>{

                await axios.get(`https://run.mocky.io/v3/6904e142-ad35-4781-9e0a-d48556ab5a24`)
                .then(res=>{
                        console.log(res.data)
                        data =  res.data
                })
                .catch(err=>{
                        console.log(err)
                })

   return data;
}