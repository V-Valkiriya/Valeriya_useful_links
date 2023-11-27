import Circles from '../../ui/cicrcles/Circles'
import MetaTitle from '../../ui/MetaTitle'
import AboutMe from './about-me/AboutMe'
import Grid from './grid/Grid'
import styles from './Home.module.scss'
import RecentVideos from './recent-videos/RecentVideos'

const Home = ({ links, me }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title="Valeriya | Useful links" />
			<div className={styles.container}>
				<AboutMe me={me} />
				{/* <RecentVideos /> */}
				<Grid links={links} />
			</div>
			<Circles />
		</section>
	)
}

export default Home
