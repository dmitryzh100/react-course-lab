import { Author } from '../constants';

function getAuthorsNames(
  authorIds: string | string[],
  authorsList: Author[]
): string {
  if (!authorIds || (Array.isArray(authorIds) && !authorIds.length)) {
    return '';
  }

  if (typeof authorIds === 'string') {
    const author = authorsList.find((a) => a.id === authorIds);

    return author ? author.name : '';
  }

  return authorIds
    .map((authorId) => {
      const author = authorsList.find((a) => a.id === authorId);

      return author ? author.name : '';
    })
    .filter(Boolean)
    .join(', ');
}

export { getAuthorsNames };
export default getAuthorsNames;
