export default function NewsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white">Новости</h1>
        <div className="space-y-6">
          {/* Здесь будут новостные карточки */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
            <h2 className="text-xl font-semibold mb-2 text-white">Новость 1</h2>
            <p className="text-white/80">Содержание новости</p>
            <p className="text-sm text-white/60 mt-2">Дата публикации</p>
          </div>
        </div>
      </div>
    </div>
  );
} 