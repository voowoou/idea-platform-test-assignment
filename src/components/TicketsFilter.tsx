import { useForm } from 'react-hook-form';
import style from './TicketsFilter.module.sass';

interface Filter {
  currency: string;
  stops: number[];
}

interface onFilterChangeType {
  onFilterChange: (newFilter: Filter) => void;
}

export default function TicketFilter({ onFilterChange }: onFilterChangeType) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      currency: 'RUB',
      stops: [],
    },
  });

  const onSubmit = (data: any) => {
    const { currency, stops } = data;

    // Создаем массив для stops, фильтруя по значению и преобразуя в числа
    let selectedStops: number[] = [];
    if (stops.includes('all')) {
      selectedStops = []; // Если выбран "Все", очищаем массив
    } else {
      selectedStops = stops.filter((stop: string) => stop !== 'all').map(Number);
    }

    const newFilter: Filter = {
      currency: currency,
      stops: selectedStops,
    };

    onFilterChange(newFilter);
  };

  return (
    <form className={style.ticketsFilter} onSubmit={handleSubmit(onSubmit)}>
      <h2>Валюта</h2>
      <div className={style.currency}>
        <div className={style.radioContainer}>
          <input
            {...register('currency')}
            type="radio"
            id="rub"
            value="RUB"
            name="currency"
            defaultChecked
            className={style.radio}
          />
          <label htmlFor="rub" className={style.radioLabel}>
            RUB
          </label>
          <input
            {...register('currency')}
            type="radio"
            id="usd"
            value="USD"
            name="currency"
            className={style.radio}
          />
          <label htmlFor="usd" className={style.radioLabel}>
            USD
          </label>
          <input
            {...register('currency')}
            type="radio"
            id="eur"
            value="EUR"
            name="currency"
            className={style.radio}
          />
          <label htmlFor="eur" className={style.radioLabel}>
            EUR
          </label>
        </div>
      </div>
      <div className={style.stops}>
        <h2>Количество пересадок</h2>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input
              {...register('stops')}
              value="all"
              className={style.checkbox}
              type="checkbox"
              defaultChecked
            />
            <span className={style.customCheckbox}></span>
            Все
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input {...register('stops')} value={0} className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>
            Без пересадок
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input {...register('stops')} value={1} className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>1 пересадка
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input {...register('stops')} value={2} className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>2 пересадки
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input {...register('stops')} value={3} className={style.checkbox} type="checkbox" />
            <span className={style.customCheckbox}></span>3 пересадки
          </label>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <button type="submit" className={style.submitButton}>
          Применить
        </button>
      </div>
    </form>
  );
}
