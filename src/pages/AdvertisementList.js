import React ,{ useState ,useEffect} from 'react'
import { Table ,Button} from 'semantic-ui-react'
import AdvertisementService from '../services/AdvertisementService'
import FilterAdvertisement from './forms/FilterAdvertisement';
import { useDispatch } from "react-redux";
import { addFavAdv } from '../store/actions/favAdvertActons';
import { toast } from "react-toastify";

export default function AdvertisementList() {
  const dispatch = useDispatch();
  const [advertisements, setAdvertisements] = useState([])

  let [activePage, setActivePage] = useState(1);
  let [filterOption, setFilterOption] = useState({});
  let [pageSize, setPageSize] = useState(2);
  let [totalPageSize, setTotalPageSize] = useState(0);
    useEffect(()=>{
        let advertisementService = new AdvertisementService();
        advertisementService.getByIsConfirmed().then(result=>setAdvertisements(result.data.data),[]);

        advertisementService.getPageableAndFilterJobPostings(activePage, pageSize, filterOption)
        .then((result) => {setAdvertisements(result.data.data);
        setTotalPageSize(parseInt(result.data.message));
        });
        
     },[filterOption, activePage, pageSize]);
     const handleFilterClick = (filterOption) => {
      if(filterOption.cityId.length === 0){
        filterOption.cityId = null;
      }
      if(filterOption.jobTitleId.length === 0){
        filterOption.jobTitleId = null;
      }
      if(filterOption.workTypeId.length === 0){
        filterOption.workTypeId = null;
      }
      if(filterOption.workScheduleId.length === 0){
        filterOption.workScheduleId = null;
      }
      setFilterOption(filterOption);
      setActivePage(10);
    }

    const handleAddToFavList = (advert) => {
      dispatch(addFavAdv(advert));
      toast.success(`${advert.description} Favorilere eklendi!`)
    };
    return (
      <div>
        <FilterAdvertisement clickEvent={handleFilterClick}/>
        <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Bilgilendirme:</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon <br></br>Adedi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>İlan eklenme tarihi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {advertisements.map((advert)=>(
            <Table.Row >
                <Table.Cell>{advert.description}</Table.Cell>
                <Table.Cell>{advert.jobtitle.title}</Table.Cell>
                <Table.Cell>{advert.workType.workType}</Table.Cell>
                <Table.Cell>{advert.quota}</Table.Cell>
                <Table.Cell>{advert.city.cityName}</Table.Cell>
                <Table.Cell>Min:{advert.minSalary}<br/>Maks:{advert.maxSalary}</Table.Cell>
                <Table.Cell>{advert.createdDate}</Table.Cell>
                <Table.Cell><Button onClick={()=>handleAddToFavList(advert)}>Favorilere Ekle</Button></Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
      </Table>
  </div>
        
    )
}

