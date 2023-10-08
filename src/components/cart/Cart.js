import Delete from './delete.svg'
import './Cart.css'
import { useSelector,useDispatch} from 'react-redux';
import { actions } from '../../store';

const Cart = () => {
  const data = useSelector(state=>state.cartState.items);
  const dispatch = useDispatch();
  console.log(data);
  if (data.lenght===0) {
    alert("empty");
    return(
      <div>
        {null}
      </div>
    );
  }
  let total=0;
  data.map(item=>{total+=item.total});
//{
//     "id": 1,
//     "img": "/static/media/814BlZvtcnL._SX679_.8d2853329237ff165a62.jpeg",
//     "name": "Canon EOS 1500D",
//     "price1": "₹41,989",
//     "description": " 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens|Capture wild animals and shoot scenic landscapes with the Canon EOS 500D camera|APS-C CMOS ",
//     "cnt": 1
//}
  
  return (
    <div className='cart'>
      <h1 className='name'>PRODUCTS IN YOUR CART</h1>
      {data.map((item,i) => (
        <div className='item' key={item.id}>
          <img className='cimg' src={item.img} alt='cart' />
          <div className='details'>
            <h1 className='pname'>{item.name}</h1>
            <p className='desc'>{item.description}</p>
            <div className='cprice'>{item.price1}</div>
          </div>
          <img className='delete' src={Delete} alt=" " onClick={()=>dispatch(actions.deleteItems(i))}/>
        </div>
      ))}
      <div className='total'>
        <span className='cdeatails'>TOTAL</span>
        <span className='cdeatails'>
          <div>₹{total}</div>
        </span>
      </div>
      <button className='cbut'>PROCEED TO CHECKOUT</button><br />
      <button className='rest' onClick={()=>{
        dispatch(actions.clearItems());
      }}>Reset Card</button>
    </div>
  );
}

export default Cart;
