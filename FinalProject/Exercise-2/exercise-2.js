
        function kali()
        {
            a = eval(kalkulator.bil1.value)
            b = eval(kalkulator.bil2.value)
            c = a * b
            kalkulator.hasil.value = c
        }
        function bagi()
        {
            a = eval(kalkulator.bil1.value)
            b = eval(kalkulator.bil2.value)
            c = a / b
            kalkulator.hasil.value = c
        }
        function tambah()
        {
            a = eval(kalkulator.bil1.value)
            b = eval(kalkulator.bil2.value)
            c = a + b
            kalkulator.hasil.value = c
        }
        function kurang()
        {
            a = eval(kalkulator.bil1.value)
            b = eval(kalkulator.bil2.value)
            c = a - b
            kalkulator.hasil.value = c
        }
        function hapus()
        {
            kalkulator.bil1.value = ""
            kalkulator.bil2.value = ""
            kalkulator.hasil.value = ""
        }
