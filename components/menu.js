import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/menu.module.scss'
import img from 'public/images/menu/img1.png'
import { useState } from 'react';

export default function Menu(props) {
    const menu = props.menu[0];
    const categories = menu.categories;
    const [option, setOption] = useState(menu.categories[0].name);
    let current_category = categories.find(cat => cat.name == option);
    
    return(
        <section className="section is-fullheight menu-section">
            <div className="container menu-container">
                <div className='rows menu-rows'>
                    <div className='row menu-label'>
                        <p className='menu-label-back'>Meny</p>
                        <p className='menu-label-front'>Meny</p>
                    </div>
                    <div className='row menu-navbar'>
                    {menu.categories.map((item, index) => {
                            return(
                                <div className={`menu-navbar-option-${option == item.name ? 'active' : 'inactive'}`} onClick={()=>setOption(item.name)}>
                                    <p className='menu-option-label'>{item.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='row divider'>
                        <hr className='dopdown divider'/>
                    </div>
                    <div className='row category'>
                        <p className='category-label'>Category</p>
                    </div>
                    <div className='row menu-body'>
                        {current_category.items.map((item, index) => {
                            if(item.image.full == '') {
                                return (
                                    <div className='item-noimg'>
                                        <div className='menu-item-description'>
                                            <p className='item-title'>{item.name}</p>
                                            <p className='item-description'>{item.description}</p>
                                            <p className='item-price'>{item.price}</p>
                                            <div className='item-tags'>
                                                {
                                                    item.dishtags.map((tag, index) => {
                                                        return (
                                                            <>
                                                                <p className='item-tag'>{tag.name}</p>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                <div className='item-wimg'>
                                    <img src={item.image.full}></img>
                                    <div className='menu-item-description'>
                                    <p className='item-title'>{item.name}</p>
                                    <p className='item-description'>{item.description}</p>
                                    <p className='item-price'>{item.price}</p>
                                    <div className='item-tags'>
                                        
                                    </div>
                                </div>
                            </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}