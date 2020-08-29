import React, { useState, useContext } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import { ItemContext } from '../context/ItemContext';
import PostCard from './PostCard';

const initialItem = {
    item_name: "",
    description: "",
    price: "",
    img_src: "",
    user_id: "",
    id: ""
}

export default function PostEdit() {



    const items = useContext(ItemContext);
    const id = localStorage.getItem('id');

    // {items.map(item => {
    //     if (item.user_id == id) {
    //         console.log(item); 
    //         return item
    //     } 
    // }) 
    // };



    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialItem);


    const editItem = item => {
        setEditing(true);
        setItemToEdit(item)
        console.log("item to edit",item)
    }

    const saveEdit = (e) => {
        e.preventDefault();
        console.log("Items for edit",itemToEdit)
        axiosWithAuth()
            .put(`/api/items/${itemToEdit.id}`, itemToEdit)
            .then(res => {
                console.log('Edit Responce', res)
                setItemToEdit(res.data)
                // window.location.reload(false);
            })
            .catch(err =>
                console.log('Error Editting', err.message, err.response),
                // window.location.reload(false)
            )
    }

    const deleteItem = () => {
        axiosWithAuth()
            .delete(`/api/items/${itemToEdit.id}`)
            .then(res => {
                console.log('PlantCards.js deletePlant: .delete: res', res.data)
                // window.location.reload(false)
            })
            .catch(err => {
                console.log('PlantCards.js: deletePlant: .delete: err: ', err.message, err.response)
                // window.location.reload(false);
            })

    }

    console.log('plants context', items)

    return (
        <div>
            <div>
                {editing && (<form onSubmit={saveEdit}>
                    <legend>Edit Item</legend>
                    <label>Item Name:
                            <input
                            onChange={e => setItemToEdit({ ...itemToEdit, item_name: e.target.value })}
                            value={itemToEdit.item_name}
                        />
                    </label>
                    <br />
                    <label>Item Description:
                            <input
                            onChange={e => setItemToEdit({ ...itemToEdit, description: e.target.value })}
                            value={itemToEdit.description}
                        />
                    </label>
                    <br />
                    <label>Item Price:
                            <input
                            onChange={e => setItemToEdit({ ...itemToEdit, price: e.target.value })}
                            value={itemToEdit.price}
                        />
                    </label>
                    <br />
                    <label>Image Source:
                            <input
                            onChange={e => setItemToEdit({ ...itemToEdit, img_src: e.target.value })}
                            value={itemToEdit.img_src}
                        />
                    </label>
                    <br />
                    <div>
                        <button type="submit">Save</button>
                        <br />
                        <button onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </form>
                )}
            </div>
            <div>
                <div className="posts-grid">
                    {items.map(item => {
                        if (item.user_id == id) {
                            // console.log(item);
                            return (
                                <div>
                                    <PostCard item={item} key={item.id} />
                                    <button onClick={() => editItem(item)}>Edit Item</button>
                                    <button onClick={() => deleteItem(item)}>Delete Item</button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
