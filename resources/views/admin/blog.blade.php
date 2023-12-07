<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <section>
        <h4>Halaman Blog Artikel</h4>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>image</th>
                        <th>judul</th>
                        <th>aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $no = 1;
                    @endphp
                    @foreach ($artikels as $artikel)
                        <tr>
                            <td>{{ $no++ }}</td>
                            <td>
                                <img src="{{ asset('storage/artikel/' . $artikel->image) }}" height="100" alt="">
                            </td>
                            <td>
                                {{ $artikel->title }}
                            </td>
                            <td>
                                <form action="" method="POST">
                                    @csrf
                                    <button type="submit">Hapus</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</body>

</html>
