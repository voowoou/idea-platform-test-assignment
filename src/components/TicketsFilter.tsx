import style from './TicketsFilter.module.sass';

export default function TicketFilter() {
  return (
    <form className={style.ticketsFilter}>
      <h2>Валюта</h2>
      <div className={style.currency}>
        <div className={style.radioContainer}>
          <input type="radio" id="rub" name="currency" defaultChecked className={style.radio} />
          <label htmlFor="rub" className={style.radioLabel}>
            RUB
          </label>
          <input type="radio" id="usd" name="currency" className={style.radio} />
          <label htmlFor="usd" className={style.radioLabel}>
            USD
          </label>
          <input type="radio" id="eur" name="currency" className={style.radio} />
          <label htmlFor="eur" className={style.radioLabel}>
            EUR
          </label>
        </div>
      </div>
      <div className={style.stops}>
        <h2>Количество пересадок</h2>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>
            Без пересадок
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>1 пересадка
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>2 пересадки
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>3 пересадки
          </label>
        </div>
      </div>
    </form>
  );
}
