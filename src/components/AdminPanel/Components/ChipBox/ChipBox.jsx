
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ChipBox = ({ titleChildCategories, setTitleChildCategories}) => {
	const categoriesList = useSelector(state => state.uploadCategories.uploadCategories);
	const theme = useTheme();

	useEffect(()=>{// добуваємо тайтли дочірніх категорій і записуємо в titleChildCategories
	let arrTitleCategories=[];
	titleChildCategories.map((el) => {
			for (let index = 0; index < categoriesList.length; index++) {
			   if (categoriesList[index].id == el) {
				arrTitleCategories.push(categoriesList[index].title)
			   }
			}
		 })
		 setTitleChildCategories(arrTitleCategories)
	},[])
	
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		console.log(event);
		setTitleChildCategories(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	const ITEM_HEIGHT = 28;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	function getStyles(name, titleChildCategories, theme) {
		return {
			fontWeight:
				titleChildCategories.indexOf(name) === -1
					? theme.typography.fontWeightRegular
					: theme.typography.fontWeightMedium,
		};
	}

	return (
		
					<FormControl sx={{ m: 2, width: 450 }}>
						<InputLabel>Батьківська категорія</InputLabel>
						<Select
							// labelId="demo-multiple-chip-label"
							id={"demo-multiple-chip"}
							multiple
							value={titleChildCategories}
							onChange={handleChange}
							input={<OutlinedInput id="select-multiple-chip" label="Батьківська категорія" />}
							renderValue={(selected) => (
								<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.1 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
							selected
						>
							{categoriesList.map((name) => (
								<MenuItem
									key={name.id}
									value={name.title}
									style={getStyles(name.title, titleChildCategories, theme)}
									onClick={(e) => {

									}}
								>
									{name.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>

	);
};

export default ChipBox;