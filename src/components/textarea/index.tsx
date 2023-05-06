import { FC } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from 'redux/reducers/moviesSlice'
import './style.css'

interface IPropsArea {
  loginName: string
}

const TextArea: FC<IPropsArea> = ({ loginName }): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);
  const loginData = useSelector((state: any) => state.movies.login);
  const dispatch = useDispatch();

  const addData = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (valid) {
      dispatch(addComment({ login: loginData, comment: value }))
      setValue('')
    }
  }

  const checkValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    if (e.target.value.length < 20) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  return (
    <div className="container__text-area">
      <div className="container__content__text-area">
        <form>
          <span className="review">
            <b>Введите ваш отзыв:</b>
          </span>
          <textarea
            className={valid ? 'text-area' : 'text-area-active'}
            placeholder="Необходимо ввести не менее 20 символов"
            value={value}
            name="comment"
            onChange={checkValue}
          ></textarea>
          <p>
            <input className="submitComment" type="submit" onClick={addData} />
          </p>
        </form>
      </div>
    </div>
  )
}

export default TextArea
