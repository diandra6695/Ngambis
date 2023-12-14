<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-bs5.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <section>
        <h4>Halaman Edit artikell</h4>
        <form action="{{ route('blog.update', $artikel->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            <label for="">Masukkan Judul</label>
            <input type="text" name="title" value="{{ old('title', $artikel->title) }}">
            @error('title')
                {{ $message }}
            @enderror

            <label for="">Masukkan Gambar</label>
            <input type="hidden" name="old_image" value="{{ $artikel->image }}">
            <div class="">
                <img src="{{ asset('storage/artikel/' . $artikel->image) }}" class="col-lg-4" alt="">
            </div>
            <input type="file" name="image">

            @error('image')
                {{ $message }}
            @enderror

            <label for="">Blog</label>
            <textarea name="description" id="summernote">
                {!! $artikel->description !!}
            </textarea>

            @error('description')
                {{ $message }}
            @enderror

            {{-- <label for="">Kategori</label>
            <select name="kategori">
                @foreach ($kategori as $kat)
                    <option value="{{ $kat->kategori }}">{{ $kat->kategori }}</option>
                @endforeach
            </select>

            <select name="mapel">
                @foreach ($mapel as $map)
                    <option value="{{ $map->mapel }}">{{ $map->mapel }}</option>
                @endforeach
            </select> --}}
            <button type="submit">Update</button>
        </form>

    </section>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
    {{-- Summernote JS --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-bs5.min.js"></script>


    <script>
        $(document).ready(function() {
            $('#summernote').summernote({
                height: 200,
            });
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>
