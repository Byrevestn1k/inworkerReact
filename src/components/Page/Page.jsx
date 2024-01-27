import Navigation from "../Navigation";
import "./page.css";
import PageWrapper from "../PageWrapper/PageWrapper";


const Page = ({data}) => {
    console.log(data);
  let {dateOfCreate, dateOfUpdate, description, keywords,path,picture,priority,published,textvalue,title } =data;
    return (	
    
 <div className="content">
                <h1>PAGE</h1>
                
                   <div>published</div>
                   <h1>title</h1>
                   <div>textvalue</div>
                </div>
       

             
        
		
	)
};

export default Page;