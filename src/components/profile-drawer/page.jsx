'use client'
import React from 'react'
import "./page.css"
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export default function page(props) {

    return (
        <Box className="profile-drawer" sx={{ left: props.drawer ? "0px" : "-100%" }}>
            <Box className="item">
                <p ><Button className='close' onClick={() => {
                    props.setDrawer(false)
                }}><IoClose /></Button></p>
                <Image src="/images/avatar.webp" alt="Admin Avatar" width={100} height={100} />
                <h2>Admin</h2>
                <p className="email">email@email.com</p>
            </Box>
            <Box className="links" >

                <List>
                    {props.data.map((item, index) => (
                        <ListItem button key={index} component="a" href={item.path} >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.link} />
                        </ListItem>
                    ))}
                </List>

            </Box>
            <Box className="item">
                <Button variant="contained" className='logout'>Logout</Button> {/* Optional styling */}
            </Box>
        </Box>
    )
}
