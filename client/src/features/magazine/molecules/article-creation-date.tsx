import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Text } from 'theme-ui';

type ArticleCreationDateProps = {
  creationDate: string;
}

export const ArticleCreationDate = ({ creationDate }: ArticleCreationDateProps) => {
  const formattedDate = dayjs(creationDate).locale('ru').format('DD MMMM YYYY');

  return (
    <Text ml={2} sx={{ color: 'gray', fontSize: 1, fontFamily: 'heading' }}>
      {formattedDate}
    </Text>
  );
};
