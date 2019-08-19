import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';

const Item = (props) => {
    console.log('props', props)
    const { item } = props
    const { title } = item
    const value = '';
    const [check, setCheck] = useState(item.done)

    const checkOrUncheck = item => () => {
        if (item.done) {
            item.done = false;
        } else {
            item.done = true;
        }

        setCheck(item.done)
        props.atualizar(item);
    }

    return (
        <div>
            <ListItem key={value} role={undefined} dense button onClick={checkOrUncheck(item)}>
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={check}
                    tabIndex={-1}
                    disableRipple
                    inputProps
                />
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItem>
            <Divider />
        </div>
    );
}

export default Item