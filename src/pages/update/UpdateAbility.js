import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Dropdown,Form , Button} from 'semantic-ui-react'
import AbilityService from "../../services/AbilityService";

const initialValues= {
    abilityId: "",
}
  
export default function UpdateAbility(props) {
    let abilityService=new AbilityService();
    const [abilities,setAbilities]=useState([]);   
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            let newAbility = {
                ability:{
                    id:values.abilityId
                },
                candidate: {
                    id: 1,
                },
            };
            abilityService.update( props.id,newAbility  ).then((result) => console.log(newAbility));
            alert("İlan eklendi onaylandıktan sonra ");
        },
    });
    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    }
  useEffect(() => {
   abilityService.getAbilities().then((result) => setAbilities(result.data.data));
}, []);
    const abilitiesOption = abilities.map((ability, index) => ({
        key: index,
        text: ability.abilityName,
        value: ability.id,
    }));
    return (
        <div>
           <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <label>Teknoloji Adı</label>
              <Dropdown clearable item placeholder="Teknoloji Adı" search selection
                  id="abilityId"
                  value={formik.values.abilityId}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "abilityId")
                  }
                  options={abilitiesOption}
                  />
                  {formik.errors.abilityId && formik.touched.abilityId && (
                   <div className={"ui pointing red basic label"}>
                    {formik.errors.abilityId}
                   </div>
                  )}
            </Form.Field>
            <Button
                   content="Güncelle"
                   positive
                   type="submit"
                   onClick={() => console.log(formik.errors)}
               />
            </Form>
        </div>
   )
}