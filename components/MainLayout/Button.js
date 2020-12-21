import classes from '../../styles/MainLayout/components/buttons.module.scss'

export default function Button({children, color, loading = false, actions, block}) {
	const colors = {
		primary: classes.btnPrimary
	}

	return (
		<button
			disabled={loading}
			className={[
				block ? classes.btnBlock : classes.btn,
				colors[color] || classes.btnPrimary
			].join(' ')}
			onClick={actions && actions.onClick}
		>
			{loading ? 'Завантаження...' : children}
		</button>
	)
}
