import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-6">
      <Head>
        <title>VidraAI - تحويل الصور إلى فيديو</title>
        <meta name="description" content="حوّل صورك إلى فيديو احترافي بالذكاء الاصطناعي - مجاناً وبدون تسجيل" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">VidraAI</h1>
      <p className="mb-6 text-lg text-center max-w-xl">حوّل صورك إلى فيديو احترافي مع تأثيرات ذكية وموسيقى جذابة. مجاناً وبدون تسجيل دخول.</p>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-2 text-sm font-medium">اختر صورك</label>
        <input type="file" accept="image/*" multiple className="w-full mb-4 text-black bg-white p-2 rounded" />
        <label className="block mb-2 text-sm font-medium">اكتب عنوان الفيديو أو الشعار</label>
        <input type="text" placeholder="مثال: رحلتي إلى الطبيعة" className="w-full mb-4 text-black bg-white p-2 rounded" />
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full font-semibold">حوّل إلى فيديو</button>
      </div>
      <p className="mt-6 text-sm text-gray-400">Powered by AI - مجاني 100%</p>
    </div>
  );
}
