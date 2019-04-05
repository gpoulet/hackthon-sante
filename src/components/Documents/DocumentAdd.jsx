import React, {useState} from "react";
import {func} from "prop-types";
import {InputItem, DatePicker,List, ImagePicker} from "antd-mobile";
import {Button} from "antd";
import {createForm} from 'rc-form';
import moment from "moment"
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';


function DocumentAdd({add,form}) {
    const { getFieldProps } = form;
    const [name, setName] = useState("");
    const [files, setFiles] = useState([]);
    const [date, setDate] = useState(new Date());



    const onClick=()=> {
        add({name:name.props.value, date: moment(date).format("DD/MM/YYYY")});
    }

    const onChange = (files) => {
        setFiles(files)
    };

    return (
        <List>
            <InputItem

                {...getFieldProps('name')}
            clear
            placeholder="Name"
            ref={setName}
        />

            <DatePicker
                mode="date"
                title="Date"
                value={date}
                locale={enUs}
                onChange={date => setDate(date)}>
                <List.Item arrow="horizontal">Date</List.Item>

            </DatePicker>
            <ImagePicker
                files={files}
                onChange={onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                selectable={files.length < 7}
                multiple={false}
            />
            <List.Item>
                <Button
                    style={{width: '100%', color: '#108ee9', textAlign: 'center'}}
                    onClick={onClick}
                >
                    Ajouter
                </Button>
            </List.Item>
        </List>
    )
}

DocumentAdd.propTypes = {
    add: func
};

export default createForm()(DocumentAdd);
