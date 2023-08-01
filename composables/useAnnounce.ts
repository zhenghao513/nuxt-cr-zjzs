import { queryAnnounce } from '~/api/announce';
import type { AnnounceResult } from '~/api/announce';

export default function useAnnounce(bindType: number) {
  const title = ref('');
  const content = ref('');
  onMounted(async () => {
    const { data } = await queryAnnounce(bindType);
    title.value = (data.value as AnnounceResult).obj.title;
    content.value = (data.value as AnnounceResult).obj.content;
  });

  return { title, content };
}
