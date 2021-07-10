import React, { useEffect, useState }from 'react'
import WorkTypeService from "../../services/WorkTypeService";
import CityService from "../../services/CityService";
import JobTitleService from "../../services/JobTitleService";
import WorkScheduleService from "../../services/WorkScheduleService";
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'
import AdvertisementService from '../../services/AdvertisementService'

export default function FilterAdvertisement({clickEvent}) {
    const [advertisements, setAdvertisements] = useState([])
    const [workSchedules, setWorkSchedules] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobTitles, setJobTitles] = useState([]);

    useEffect(() => {
        let advertisementService = new AdvertisementService();
        advertisementService.getByIsConfirmed().then(result=>setAdvertisements(result.data.data),[]);

        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))

        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))

        let workTypeService = new WorkTypeService()
        workTypeService.getWorkTypes().then(result => setWorkTypes(result.data.data))

        let workScheduleService = new WorkScheduleService();
        workScheduleService.getAll().then(result => setWorkSchedules(result.data.data))
    },[])

    const [cityIndex, setCityIndex] = useState([])
    const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
    }

    const [minSalaryIndex, setMinSalaryIndex] = useState([])
    const handleChangeMinSalary = (e, { value }) => {
        setMinSalaryIndex(value)
    }

    const [maxSalaryIndex, setMaxSalaryIndex] = useState([])
    const handleChangeMaxSalary = (e, { value }) => {
        setMaxSalaryIndex(value)
    }

    const [jobTitleIndex,setJobTitleIndex] = useState([])
    const handleChangeJobTitle = (e, { value}) => {
        setJobTitleIndex(value)
    }
    const [workTypeIndex] = useState([])
    const handleChangeWorkType = (e, { value, checked}) => {
        if(checked){
            workTypeIndex.push(value)
        }else {
            let index = workTypeIndex.indexOf(value)
            if(index > -1) {
                workTypeIndex.splice(index, 1)
            }
        }
    }

    const [workScheduleIndex] = useState([])
    const handleChangeWorkSchedule = (e, { value, checked}) => {
        if(checked){
            workScheduleIndex.push(value)
        }else {
            let index = workScheduleIndex.indexOf(value)
            if(index > -1) {
                workScheduleIndex.splice(index, 1)
            }
        }
    }

    return (
        <div>
            <Segment color="black" raised>
                <Label size="large">Şehir</Label>
                <Dropdown
                    placeholder="Şehir seçiniz"
                    selection
                    search
                    multiple
                    clearable
                    options={cities.map((city, index) => {
                        return { text: city.cityName, key: city.index, value: city.id }
                    })}
                    onChange={handleChangeCity}
                    value={cityIndex}
                />
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">İş Pozisyonu</Label>
                    <Dropdown
                        placeholder="pozisyon seçiniz"
                        selection
                        search
                        multiple
                        clearable 
                        options={jobTitles.map((jobTitle,index) => {
                                return {text:jobTitle.title,key:jobTitle.index,value:jobTitle.id}
                        })}   
                        onChange={handleChangeJobTitle}
                        value={jobTitleIndex}
                    />
                    
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">Çalışma Yeri</Label>
                {workTypes.map(workType => (
                        <Checkbox
                            key={workType.id}
                            label={workType.workType}
                            onChange={handleChangeWorkType}
                            value={workType.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="black" raised >
                <Label attached="top" size="large" style={{ width: "100%" }}>Çalışma Süresi</Label>
                {workSchedules.map(workSchedule => (
                        <Checkbox
                            key={workSchedule.id}
                            label={workSchedule.workHour}
                            onChange={handleChangeWorkSchedule}
                            value={workSchedule.id}
                        />
                ))}
            </Segment>
            <Button
                type="button"
                fluid
                color="green"
                onClick={() => clickEvent({ cityId: cityIndex, jobTitleId: jobTitleIndex, workTypeId: workTypeIndex,
                     workScheduleId: workScheduleIndex,minSalaryId:minSalaryIndex,maxSalaryId:maxSalaryIndex})}
            >
                Filtrele
            </Button>
        </div>
    )
}
