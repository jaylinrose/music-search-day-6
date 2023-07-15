import { useContext } from 'react'
import GalleryItem from './GalleryItem'
import { DataContext } from '../context/DataContext'

const Gallery = () => {
    const data = useContext(DataContext)
    console.log('Data in gallery!!', data)

    const Gallery = (props) => {
        const data = props.data.result.read()
    
        const display = data.map((item, index) => {
            return (
                <GalleryItem item={item} key={index} />
            )
        })
    
        return (
            <div>
                {display}
            </div>
        )
    }
    
}



export default Gallery
