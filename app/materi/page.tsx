export default function MateriPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="prose max-w-5xl">
        <h1>Materi Lengkap NetLab SMA</h1>

        {/* # Materi Lengkap NetLab SMA

## Pengenalan

NetLab SMA adalah simulator jaringan komputer berbasis web yang dibuat untuk membantu siswa memahami dasar-dasar jaringan komputer dengan cara visual dan interaktif.

Simulator ini dibuat mirip seperti Cisco Packet Tracer namun lebih sederhana sehingga cocok digunakan untuk pembelajaran tingkat SMA.

Melalui aplikasi ini siswa dapat belajar:

* dasar jaringan komputer
* fungsi perangkat jaringan
* kabel jaringan
* IP Address
* subnet mask
* gateway
* DHCP
* wireless network
* ping
* packet animation
* manajemen bandwidth
* QoS dasar
* topologi jaringan

---

# BAB 1 — DASAR JARINGAN KOMPUTER

## Apa itu jaringan komputer?

Jaringan komputer adalah hubungan antara dua atau lebih perangkat komputer agar dapat saling berkomunikasi dan bertukar data.

Contoh:

* komputer laboratorium sekolah
* jaringan WiFi sekolah
* internet rumah
* jaringan warnet
* jaringan kantor

Tujuan jaringan komputer:

* berbagi data
* berbagi internet
* berbagi printer
* komunikasi antar perangkat
* efisiensi kerja

---

# BAB 2 — PERANGKAT JARINGAN

## 1. PC (Personal Computer)

PC digunakan sebagai perangkat utama pengguna.

Fungsi:

* mengakses jaringan
* mengirim data
* menerima data
* melakukan ping
* browsing internet

Di simulator:

* dapat diberi IP
* dapat dihubungkan kabel
* dapat melakukan ping
* dapat mendapat IP DHCP

---

## 2. Laptop

Laptop memiliki fungsi sama seperti PC tetapi lebih fleksibel.

Pada simulator laptop dapat:

* menggunakan kabel
* menggunakan wireless
* mendapatkan IP otomatis
* melakukan ping

---

## 3. Smartphone

Smartphone digunakan untuk simulasi perangkat mobile.

Fungsi:

* belajar jaringan wireless
* simulasi perangkat WiFi
* simulasi DHCP wireless

---

## 4. Switch

Switch adalah perangkat yang menghubungkan banyak perangkat dalam satu jaringan.

Fungsi:

* menghubungkan PC
* menghubungkan printer
* menghubungkan router
* menghubungkan access point

Switch bekerja pada:

OSI Layer 2 (Data Link Layer)

Ciri-ciri:

* memiliki banyak port
* menjadi pusat koneksi jaringan LAN
* mempercepat komunikasi antar perangkat

Contoh penggunaan:

* laboratorium komputer
* kantor
* sekolah

---

## 5. Router

Router digunakan untuk menghubungkan jaringan yang berbeda.

Fungsi:

* menghubungkan jaringan ke internet
* menghubungkan subnet berbeda
* mengatur jalur data

Router bekerja pada:

OSI Layer 3 (Network Layer)

Contoh:

* router WiFi rumah
* router ISP
* Mikrotik
* Cisco Router

---

## 6. Printer

Printer jaringan digunakan agar banyak komputer dapat mencetak ke satu printer.

Keuntungan:

* hemat perangkat
* mudah digunakan bersama
* efisien

---

## 7. DHCP Server

DHCP adalah:

Dynamic Host Configuration Protocol

Fungsi:

* memberikan IP otomatis
* mempermudah konfigurasi jaringan
* mengurangi kesalahan IP

Tanpa DHCP:

Semua IP harus diisi manual.

Dengan DHCP:

IP otomatis diberikan oleh server.

Contoh:

* WiFi rumah
* hotspot sekolah
* kantor

---

## 8. Wireless Access Point (AP)

Access Point digunakan untuk menyediakan jaringan wireless.

Fungsi:

* memancarkan WiFi
* menghubungkan perangkat wireless
* memperluas jaringan

Perangkat yang dapat terhubung:

* laptop
* smartphone
* tablet

---

# BAB 3 — KABEL JARINGAN

## 1. Kabel Straight

Digunakan untuk perangkat berbeda jenis.

Contoh:

* PC ke Switch
* Router ke Switch
* AP ke Switch

Jika salah menggunakan kabel:

status koneksi bisa merah.

---

## 2. Kabel Crossover

Digunakan untuk perangkat sejenis.

Contoh:

* PC ke PC
* Switch ke Switch

---

## 3. Kabel Console

Digunakan untuk konfigurasi perangkat jaringan.

Bukan untuk komunikasi data biasa.

---

## 4. Wireless Connection

Digunakan untuk koneksi tanpa kabel.

Contoh:

* laptop ke access point
* smartphone ke access point

Pada simulator:

* garis biru putus-putus = wireless
* hijau = koneksi benar
* merah = koneksi salah

---

# BAB 4 — IP ADDRESS

## Apa itu IP Address?

IP Address adalah alamat perangkat pada jaringan.

Contoh:

192.168.1.10

Fungsi:

* identitas perangkat
* komunikasi antar perangkat
* pengiriman data

Tanpa IP:

Perangkat tidak bisa berkomunikasi.

---

## Struktur IPv4

Contoh:

192.168.1.10

Terdiri dari:

* Network ID
* Host ID

---

## Aturan penting

Dalam satu jaringan:

* IP tidak boleh sama
* subnet harus sama
* gateway harus benar

---

# BAB 5 — SUBNET MASK

Subnet mask digunakan untuk menentukan:

* bagian network
* bagian host

Contoh:

255.255.255.0

Subnet mask membantu perangkat mengetahui apakah perangkat lain masih satu jaringan atau berbeda jaringan.

---

# BAB 6 — DEFAULT GATEWAY

Gateway adalah pintu keluar jaringan.

Fungsi:

* menghubungkan jaringan lokal ke jaringan lain
* menghubungkan ke internet

Biasanya gateway adalah IP router.

Contoh:

192.168.1.1

---

# BAB 7 — DHCP

## Static IP

Static IP adalah IP yang diisi manual.

Keuntungan:

* stabil
* cocok untuk server
* mudah dipantau

Kekurangan:

* harus diisi satu per satu
* rawan salah konfigurasi

---

## Dynamic IP

Dynamic IP diberikan otomatis oleh DHCP.

Keuntungan:

* cepat
* mudah
* otomatis

Kekurangan:

* IP bisa berubah

---

## Auto IP pada simulator

Tombol:

"Auto IP dari DHCP"

Fungsi:

* meminta IP otomatis
* mengisi IP
* mengisi subnet mask
* mengisi gateway

---

# BAB 8 — PING

## Apa itu Ping?

Ping adalah tes koneksi antar perangkat.

Ping digunakan untuk:

* mengecek koneksi
* mengecek jaringan aktif
* troubleshooting jaringan

Jika ping berhasil:

berarti perangkat dapat berkomunikasi.

Jika ping gagal:

mungkin:

* IP salah
* kabel salah
* subnet berbeda
* perangkat belum terhubung

---

# BAB 9 — PACKET ANIMATION

Packet animation digunakan untuk memperlihatkan perjalanan data.

Contoh:

PC1 → Switch → PC2

Tujuan:

* memahami jalur data
* memahami cara kerja jaringan
* memvisualisasikan komunikasi jaringan

Ini mirip simulation mode pada Cisco Packet Tracer.

---

# BAB 10 — STATUS PORT

Pada simulator terdapat lampu status.

## Hijau

Connected

Artinya:

* kabel benar
* IP benar
* koneksi aktif

---

## Kuning

Waiting

Artinya:

* kabel sudah terhubung
* tetapi IP belum lengkap
* atau konfigurasi belum selesai

---

## Merah

Disconnected

Artinya:

* belum ada koneksi
* atau kabel salah

---

# BAB 11 — TOPOLOGI JARINGAN

## Apa itu topologi?

Topologi adalah bentuk atau susunan jaringan.

---

## Topologi Star

Semua perangkat terhubung ke switch pusat.

Keuntungan:

* mudah dikelola
* mudah troubleshooting
* paling umum digunakan

---

## Topologi Wireless

Perangkat terhubung ke Access Point.

Contoh:

* hotspot sekolah
* WiFi rumah
* WiFi cafe

---

# BAB 12 — WIRELESS NETWORK

Wireless network adalah jaringan tanpa kabel.

Menggunakan:

* gelombang radio
* WiFi

Keuntungan:

* fleksibel
* mudah dipindahkan
* tidak perlu kabel panjang

Kekurangan:

* bisa terganggu sinyal
* keamanan lebih penting

---

# BAB 13 — BANDWIDTH

## Apa itu bandwidth?

Bandwidth adalah kapasitas atau kecepatan transfer data jaringan.

Biasanya menggunakan satuan:

* Mbps
* Gbps

Contoh:

100 Mbps

Artinya:

internet dapat mengirim data dengan kecepatan tertentu.

---

## Mbps bukan GB

Mbps:

kecepatan internet

GB:

kapasitas data

---

# BAB 14 — MANAJEMEN BANDWIDTH

Manajemen bandwidth adalah proses membagi internet ke beberapa perangkat.

Contoh:

Total internet:

100 Mbps

Pembagian:

* PC1 = 20 Mbps
* PC2 = 20 Mbps
* Laptop = 30 Mbps
* Smartphone = 10 Mbps

Tujuan:

* internet stabil
* pembagian adil
* perangkat penting mendapat prioritas

---

# BAB 15 — QoS (Quality of Service)

QoS adalah teknik mengatur prioritas jaringan.

Contoh:

* server diberi prioritas tinggi
* guru mendapat bandwidth lebih besar
* siswa dibatasi

Prioritas:

* rendah
* sedang
* tinggi

---

# BAB 16 — TROUBLESHOOTING DASAR

## Penyebab ping gagal

1. Kabel salah
2. IP salah
3. Subnet berbeda
4. Gateway salah
5. Belum terhubung switch
6. DHCP belum ada
7. Wireless belum terhubung AP

---

# BAB 17 — LANGKAH PRAKTIKUM DASAR

## Praktik 1 — Menghubungkan 2 PC

Langkah:

1. tambah 2 PC
2. hubungkan dengan crossover
3. isi IP:

   * PC1 = 192.168.1.1
   * PC2 = 192.168.1.2
4. subnet:

   * 255.255.255.0
5. test ping

---

## Praktik 2 — Jaringan dengan Switch

1. tambah switch
2. tambah 3 PC
3. hubungkan dengan straight
4. isi IP berbeda
5. test ping

---

## Praktik 3 — DHCP

1. tambah DHCP server
2. tambah switch
3. tambah PC
4. hubungkan semua
5. klik Auto IP
6. test ping

---

## Praktik 4 — Wireless

1. tambah AP
2. tambah laptop
3. tambah smartphone
4. hubungkan wireless
5. gunakan DHCP
6. test ping

---

## Praktik 5 — Bandwidth

1. buka halaman bandwidth
2. isi total internet
3. tambah perangkat
4. bagi bandwidth
5. cek nilai otomatis

---

# BAB 18 — KESIMPULAN

Melalui NetLab SMA siswa dapat memahami:

* jaringan komputer
* perangkat jaringan
* IP address
* subnet mask
* gateway
* DHCP
* ping
* wireless network
* bandwidth
* QoS
* troubleshooting
* simulasi jaringan

Dengan simulator ini siswa tidak hanya belajar teori tetapi juga praktik secara visual dan interaktif.
 */}
      </div>
    </main>
  );
}
