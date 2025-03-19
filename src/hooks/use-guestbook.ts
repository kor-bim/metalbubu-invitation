import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/libs/supabase'

// ✅ 방명록 데이터 가져오기
const fetchGuestbookEntries = async () => {
  const { data, error } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

export const useGuestbookEntries = () => {
  return useQuery({ queryKey: ['guestbook'], queryFn: fetchGuestbookEntries })
}

// ✅ 방명록 데이터 추가하기
const addGuestbookEntry = async ({ name, phone, message }: { name: string; phone: string; message: string }) => {
  const sanitizedPhone = phone.replace(/\D/g, '')
  const { data, error } = await supabase.from('guestbook').insert([{ name, phone: sanitizedPhone, message }])
  if (error) throw new Error(error.message)
  return data
}

// ✅ React Query Mutation Hook
export const useAddGuestbook = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addGuestbookEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guestbook'] }) // 🔄 데이터 갱신
    }
  })
}
