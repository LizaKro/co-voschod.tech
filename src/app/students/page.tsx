export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white">Учащиеся</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Здесь будут карточки с учащимися */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
            <h2 className="text-xl font-semibold mb-2 text-white">Учащийся 1</h2>
            <p className="text-white/80">Информация об учащемся</p>
          </div>
        </div>
      </div>
    </div>
  );
} 