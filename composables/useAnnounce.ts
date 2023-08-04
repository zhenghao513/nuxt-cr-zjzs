import type { AnnounceRes } from '~/api/announce';

export default function useAnnounce(bindType: number) {
  const title = ref('');
  const content = ref('');
  onMounted(async () => {
    const { data } = await queryAnnounce(bindType);
    title.value = (data.value as AnnounceRes).obj.title;
    content.value = (data.value as AnnounceRes).obj.content;
  });

  return { title, content };
}
