
        const _v = "ZTU4ZGE0MTQtYzFiYy00ODFmLWI1NGUtYmVjOTI5MTU1OGM1";
        const getK = () => atob(_v);
        
        // Single Page Switching
        function switchPage(pageId, element) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            
            const targetPage = document.getElementById('page-' + pageId);
            if(targetPage) {
                targetPage.classList.add('active');
            }
            if(element) element.classList.add('active');
        }

        function createUniverse() {
            const container = document.getElementById('universe-container');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = (Math.random() * 2 + 1) + 'px';
                star.style.width = size; star.style.height = size;
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
                container.appendChild(star);
            }
        }
        window.onload = createUniverse;

        const urlInput = document.getElementById('urlInput');
        const clearBtn = document.getElementById('clearBtn');
        const bypassBtn = document.getElementById('bypassBtn');
        const loader = document.getElementById('loader');
        const resultBox = document.getElementById('resultBox');
        const resultLink = document.getElementById('resultLink');
        const openBtn = document.getElementById('openBtn');
        const bigCopyBtn = document.getElementById('bigCopyBtn');
        const statusMsg = document.getElementById('status-message');

        urlInput.addEventListener('input', () => {
            urlInput.value.length > 0 ? clearBtn.classList.add('visible') : clearBtn.classList.remove('visible');
        });

        clearBtn.addEventListener('click', () => {
            urlInput.value = '';
            clearBtn.classList.remove('visible');
            statusMsg.classList.add('hidden');
            resultBox.classList.add('hidden');
            urlInput.focus();
        });

        function isValidUrlFormat(string) {
            try { new URL(string); return true; } catch (_) { return false; }
        }

        bypassBtn.addEventListener('click', async () => {
            const targetUrl = urlInput.value.trim();
            resultBox.classList.add('hidden');
            statusMsg.classList.add('hidden');

            if (!targetUrl || !isValidUrlFormat(targetUrl)) {
                showStatus("VUI LÒNG NHẬP LINK", "text-amber-500 bg-amber-500/10");
                return;
            }

            loader.classList.remove('hidden');
            bypassBtn.disabled = true;
            
            try {
                const response = await fetch(`https://api.izen.lol/v1/bypass?url=${encodeURIComponent(targetUrl)}`, {
                    headers: { "x-api-key": getK() }
                });
                const data = await response.json();

                
                if (response.ok) {
                    const finalOutput = data.data || data.url || data.result; 
                    if (finalOutput) {
                        resultLink.innerText = finalOutput;
                        if (isValidUrlFormat(finalOutput)) {
                            openBtn.href = finalOutput;
                            openBtn.classList.replace('hidden', 'block');
                            bigCopyBtn.classList.replace('block', 'hidden');
                        } else {
                            bigCopyBtn.classList.replace('hidden', 'block');
                            openBtn.classList.replace('block', 'hidden');
                        }
                        resultBox.classList.remove('hidden');
                        showStatus("GIẢI MÃ HOÀN TẤT!", "text-emerald-400 bg-emerald-400/10");
                    } else { showStatus("Bypass Không Hỗ Trợ Link Lại", "text-amber-400 bg-amber-400/10"); }
                } else { showStatus("Bypass Không Hỗ Trợ Link Lại", "text-amber-400 bg-amber-400/10"); }
            } catch (error) { showStatus("LỖI KẾT NỐI API", "text-red-500 bg-red-500/10"); }
            finally { loader.classList.add('hidden'); bypassBtn.disabled = false; }
        });

        function showStatus(text, classes) {
            statusMsg.innerText = text;
            statusMsg.className = `text-center text-[9px] py-3 rounded-xl mt-4 ${classes} border border-white/5 font-black tracking-widest uppercase`;
            statusMsg.classList.remove('hidden');
        }

        function copyToClipboard(text, btnElement) {
            const temp = document.createElement("textarea");
            temp.value = text; document.body.appendChild(temp);
            temp.select(); document.execCommand("copy");
            document.body.removeChild(temp);
            const old = btnElement.innerText;
            btnElement.innerText = 'ĐÃ SAO CHÉP!';
            setTimeout(() => btnElement.innerText = old, 2000);
        }
