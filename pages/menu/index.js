import classes from '../../styles/menu.module.scss'
import MainLayout from '../../components/MainLayout';

export default function Menu() {
	const goods = [
		{
			img: '/thumb-320x240.jpg',
			title: 'Житньопшеничний хліб',
			price: '12.5',
			description: 'Это ваше блюдо, опишите его здесь. Например, перечислите ингредиенты.'
		},
		{
			img: '/thumb-320x240.jpg',
			title: 'Висівковий хліб',
			price: '10',
			description: 'Это ваше блюдо, опишите его здесь. Например, перечислите ингредиенты.'
		},
		{
			img: '/thumb-320x240.jpg',
			title: 'Чорний хліб',
			price: '15',
			description: 'Это ваше блюдо, опишите его здесь.'
		}
	]

	return (
		<MainLayout title={'Menu'}>
			<div className={classes.page}>
				<div className={classes.sticker}>
					<h5>Меню</h5>
				</div>
				<div className={classes.menu}>
					<h5 className={classes.category}>Хліб</h5>
					<ul className={classes.list}>
						{goods.map((good, index) =>
							<li key={index}>
								<div className={classes.img}>
									<img src={good.img} alt={good.title} />
								</div>
								<div className={classes.info}>
									<h6 className={classes.title}>
										<span>{good.title}</span>
										<span>{good.price} грн</span>
									</h6>
									<p>{good.description}</p>
									<button className={[classes.btn, classes.btnPrimary].join(' ')}>В корзину</button>
								</div>
							</li>
						)}
					</ul>
				</div>
			</div>
		</MainLayout>
	)
}