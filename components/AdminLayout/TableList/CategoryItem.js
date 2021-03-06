import {ListCol, ListColIcon, TableListItem} from './index';
import DropdownLayout from '../dropdown/DropdownLayout';
import classes from '../../../styles/AdminLayout/categories.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SmallMenu from '../dropdown/SmallMenu';
import LinksListItem from '../dropdown/LinksListItem';
import {useState} from 'react';
import Button from '../Button';

export default function CategoryItem({category, index, actions, products}) {
	const [dropdown, setDropdown] = useState(false)

	const toggleDropdown = value => setDropdown(value)

	return (
		<TableListItem>
			<ListCol>{index + 1}</ListCol>
			<ListCol accent="high">{category.name}</ListCol>
			<ListCol>{products.filter(product => product.category === category.id).length} шт.</ListCol>
			<ListColIcon>
				{/*---DROPDOWN---*/}
				<DropdownLayout>
					<Button
						styles={{
							size: 'sm',
							color: 'outlineLight',
							transparent: true
						}}
						actions={{onClick: () => setDropdown(prev => !prev)}}
					><FontAwesomeIcon icon="ellipsis-h" /></Button>
					{dropdown && <SmallMenu>
						<LinksListItem
							icon={'edit'}
							toggleDropdown={toggleDropdown}
							action={actions.edit}
						>Редагувати категорію</LinksListItem>
						<LinksListItem
							icon={'trash-alt'}
							toggleDropdown={toggleDropdown}
							action={actions.delete}
						>Видалити категорію</LinksListItem>
					</SmallMenu>}
				</DropdownLayout>
				{/*--------------*/}
			</ListColIcon>
		</TableListItem>
	)
}
