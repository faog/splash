import React, { Component } from 'react';
import { connect } from 'react-redux';
import key from '../../config';
import './styles.scss';

class ImageGrid extends Component {
  state = {
		images: [],
	};

	//Función de React que carga las imagenes al acceder a la página
	componentDidMount(){
		fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
		.then(res => res.json())
		.then(images => {
			this.setState({
				images,
			});
		});
	}

	render() {
		const { images } = this.state;
		return (
			<div className = "content">
				<section className = "content-grid">
					{ images.map(image => (
						<div
						key={image.id}
						className={`content-grid__item item-${Math.ceil(
							image.height / image.width,
							)}`}>
								<img src={image.urls.small} alt={image.user.username}></img>
						</div>
					))}
				</section>
			</div>
		) 
	}
}

const mapStateToProps =({ isLoading, images, error })=>({
  isLoading,
  images, 
  error,
});

export default connect (
  mapStateToProps,
  null
)(ImageGrid);
