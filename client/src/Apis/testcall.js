import axios from 'axios'
let data = null
export const testcall = async(userid,inptext,score)=>{

    var url = `http://localhost:9000/testApi?userId=${userid}&searchText=${inptext}&searchScore=${score}`;

    console.log(url);

                await axios.get(url)
                .then(res=>{
                        console.log(res)
                        data =  res
                      })
                .catch(err=>{
                        console.log(err)
                })

   return data;
}