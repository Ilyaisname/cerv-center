import {IQuality, IQualitySection} from '../interfaces';

export const qualityList: IQuality[] = [
  {
    id: 0,
    icon: 'tuiIconCheckLarge',
    description: 'Большой выбор матриц для разных моделей ноутбуков',
  },
  {
    id: 1,
    icon: 'tuiIconCheckLarge',
    description: 'В нашем ассортименте всегда найдется качественная, подходящая под конкретную модель ноутбука клавиатура',
  },
  {
    id: 2,
    icon: 'tuiIconCheckLarge',
    description: 'Высококачественные шлейфы для подключения различных компонентов ноутбука',
  },
  {
    id: 3,
    icon: 'tuiIconCheckLarge',
    description: 'Большой выбор термопаст для процессоров и видеокарт, обладающих повышенной теплопроводностью',
  },
];

export const qualityDescription: IQualitySection = {
  title: `Качественные детали на популярные
      модели всегда в наличии`,
  description: `В нашем ассортименте всегда найдется качественные комплектующие, подходящие под конкретную модель ноутбука`
}
