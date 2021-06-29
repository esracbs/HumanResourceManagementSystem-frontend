 import React, { useEffect, useState } from "react";
 import { useFormik } from "formik";
 import { Dropdown,Form , Button} from 'semantic-ui-react'
import SocialMediaService from "../services/SocialMediaService";
// import JobTitleService from "../services/JobTitleService";

 const initialValues= {
     link: "",
     linkTypeId: "",
}
   
 export default function UpdateSocialMedia(props) {
     let socialMediaService=new SocialMediaService();
     const [socialMedias,setSocialMedias]=useState([]);
     const [linkTypes,setLinkTypes]=useState([]);   
     const formik = useFormik({
         initialValues,
         onSubmit: (values) => {
             let newSocialMedia = {
                 linkType:{
                     id:values.linkTypeId
                 },
                 link: values.link,
                 candidate: {
                     id: 4,
                 },
             };
             socialMediaService.update(newSocialMedia, props.id).then((result) => console.log(newSocialMedia));
             alert("İlan eklendi onaylandıktan sonra listelenecektir");
         },
     });
     const handleChangeSemantic = (value, fieldName) => {
       formik.setFieldValue(fieldName, value);
     }
   useEffect(() => {
    let socialMediaService=new SocialMediaService();
    socialMediaService.getSocialMedias().then((result) => setSocialMedias(result.data.data));
    socialMediaService.getLinkTypes().then((result) => setLinkTypes(result.data.data));
 }, []);
     const linkTypesOption = linkTypes.map((linkType, index) => ({
         key: index,
         text: linkType.linkType,
         value: linkType.id,
     }));
     return (
         <div>
            <Form onSubmit={formik.handleSubmit}>
             <Form.Field>
               <label>Link Tipi</label>
               <Dropdown clearable item placeholder="Link Tipi" search selection
                   id="linkTypeId"
                   value={formik.values.linkTypeId}
                   onChange={(event, data) =>
                     handleChangeSemantic(data.value, "linkTypeId")
                   }
                   options={linkTypesOption}
                   />
                   {formik.errors.linkTypeId && formik.touched.linkTypeId && (
                    <div className={"ui pointing red basic label"}>
                     {formik.errors.linkTypeId}
                    </div>
                   )}
                 </Form.Field>
              <Form.Field style={{marginBottom: "1rem"}}>
            <label>Link URL</label>
            <Form.Input
                type="text"
                placeholder="Link"
                id="link"
                name="link"
                value={formik.values.link}
                onChange={formik.handleChange}
            />
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

