const publications = [
  {
    imagePath: "img/thumbnails/sqattn.png",
    title: "Squeezed Attention: Accelerating Long Context Length LLM Inference",
    pdfLink: "https://arxiv.org/pdf/2411.09688.pdf",
    codeLinks: {},
    authors:
      "Coleman Hooper*, <b>Sehoon Kim*</b>, Hiva Mohammadzadeh, Monishwaran Maheswaran, June Paik, Michael W. Mahoney, Kurt Keutzer, Amir Gholami",
    conference: "Preprint, 2024",
    selected: true,
  },
  {
    title: "TinyAgent: Function Calling at the Edge",
    pdfLink: "https://arxiv.org/pdf/2409.00608",
    codeLinks: {
      Code: "https://github.com/SqueezeAILab/TinyAgent",
      Blog: "https://bair.berkeley.edu/blog/2024/05/29/tiny-agent/",
    },
    authors:
      "Lutfi Eren Erdogan*, Nicholas Lee*, Siddharth Jha*, <b>Sehoon Kim</b>, Ryan Tabrizi, Suhong Moon, Coleman Hooper, Gopala Anumanchipalli, Kurt Keutzer, Amir Gholami",
    conference:
      "Empirical Methods in Natural Language Processing (EMNLP) Demo Track, 2024",
    selected: false,
  },
  {
    title:
      "KVQuant: Towards 10 Million Context Length LLM Inference with KV Cache Quantization",
    pdfLink: "https://arxiv.org/pdf/2401.18079.pdf",
    codeLinks: { Code: "https://github.com/SqueezeAILab/KVQuant" },
    authors:
      "Coleman Hooper, <b>Sehoon Kim</b>, Hiva Mohammadzadeh, Michael W Mahoney, Yakun Sophia Shao, Kurt Keutzer, Amir Gholami",
    conference:
      "Conference on Neural Information Processing Systems (NeurIPS), 2024",
    selected: false,
  },
  {
    title:
      "Efficient and Scalable Estimation of Tool Representations in Vector Space",
    pdfLink: "https://arxiv.org/pdf/2409.02141",
    codeLinks: { Code: "https://github.com/SqueezeAILab/Tool2Vec" },
    authors:
      "Suhong Moon*, Siddharth Jha*, Lutfi Eren Erdogan, <b>Sehoon Kim</b>, Woosang Lim, Kurt Keutzer, Amir Gholami",
    conference: "Preprint, 2024",
    selected: false,
  },
  {
    title:
      "Characterizing Prompt Compression Methods for Long Context Inference",
    pdfLink: "https://arxiv.org/pdf/2407.08892.pdf",
    codeLinks: {},
    authors:
      "Siddharth Jha, Lutfi Eren Erdogan, <b>Sehoon Kim</b>, Kurt Keutzer, Amir Gholami",
    conference:
      "ICML Workshop on Efficient Systems for Foundation Models (<b>Oral</b>), 2024",
    selected: false,
  },
  {
    title: "Learned Best-Effort LLM Serving",
    pdfLink: "https://arxiv.org/pdf/2401.07886.pdf",
    codeLinks: {},
    authors:
      "Siddharth Jha, Coleman Hooper, Xiaoxuan Liu, <b>Sehoon Kim</b>, Kurt Keutzer",
    conference:
      "ICML Workshop on Efficient Systems for Foundation Models, 2024",
    selected: false,
  },
  {
    title: "LLM2LLM: Boosting LLMs with Novel Iterative Data Enhancement",
    pdfLink: "https://arxiv.org/pdf/2403.15042.pdf",
    codeLinks: { Code: "https://github.com/SqueezeAILab/LLM2LLM" },
    authors:
      "Nicholas Lee*, Thanakul Wattanawong*, <b>Sehoon Kim</b>, Karttikeya Mangalam, Sheng Shen, Gopala Anumanchipali, Michael W Mahoney, Kurt Keutzer, Amir Gholami",
    conference: "The Association for Computational Linguistics (ACL), 2024",
    selected: false,
  },
  {
    imagePath: "img/thumbnails/llmcompiler.png",
    title: "An LLM Compiler for Parallel Function Calling",
    pdfLink: "https://arxiv.org/pdf/2312.04511.pdf",
    codeLinks: {
      Code: "https://github.com/SqueezeAILab/LLMCompiler",
      Talk: "https://www.youtube.com/watch?v=aoLtTIYAafY",
      LlamaIndex:
        "https://docs.llamaindex.ai/en/stable/api_reference/packs/agents_llm_compiler/?h=llmcompiler#llama_index.packs.agents_llm_compiler.LLMCompilerAgentPack",
      LangChain:
        "https://github.com/langchain-ai/langgraph/blob/main/examples/llm-compiler/LLMCompiler.ipynb",
    },
    authors:
      "<b>Sehoon Kim*</b>, Suhong Moon*, Ryan Tabrizi, Nicholas Lee, Michael W. Mahoney, Kurt Keutzer, Amir Gholami",
    conference: "International Conference on Machine Learning (ICML), 2024",
    selected: true,
  },
  {
    imagePath: "img/thumbnails/sqllm.png",
    title: "SqueezeLLM: Dense-and-Sparse Quantization",
    pdfLink: "https://arxiv.org/pdf/2306.07629.pdf",
    codeLinks: {
      Code: "https://github.com/SqueezeAILab/SqueezeLLM",
    },
    authors:
      "<b>Sehoon Kim*</b>, Coleman Hooper*, Amir Gholami*, Zhen Dong, Xiuyu Li, Sheng Shen, Michael W. Mahoney, Kurt Keutzer",
    conference: "International Conference on Machine Learning (ICML), 2024",
    selected: true,
  },
  {
    title: "AI and Memory Wall",
    pdfLink: "https://arxiv.org/pdf/2403.14123.pdf",
    codeLinks: {
      Blog: "https://medium.com/riselab/ai-and-memory-wall-2cb4265cb0b8",
    },
    authors:
      "Amir Gholami, Zhewei Yao, <b>Sehoon Kim</b>, Coleman Hooper, Michael W. Mahoney, Kurt Keutzer",
    conference: "IEEE MICRO Journal Special Issue, 2024",
    selected: false,
  },
  {
    title: "SPEED: Speculative Pipelined Execution for Efficient Decoding",
    pdfLink: "https://arxiv.org/pdf/2310.12072.pdf",
    codeLinks: {},
    authors:
      "Coleman Hooper, <b>Sehoon Kim</b>, Hiva Mohammadzadeh, Hasan Genc, Kurt Keutzer, Amir Gholami, Sophia Shao",
    conference:
      "NeurIPS Workshop on Efficient Natural Language and Speech Processing, 2023",
    selected: false,
  },
  {
    title: "Full Stack Optimization of Transformer Inference: a Survey",
    pdfLink: "https://arxiv.org/pdf/2302.14017.pdf",
    codeLinks: {},
    authors:
      "<b>Sehoon Kim*</b>, Coleman Hooper*, Thanakul Wattanawong, Minwoo Kang, Ruohan Yan, Hasan Genc, Grace Dinh, Qijing Huang, Kurt Keutzer, Michael W. Mahoney, Yakun Sophia Shao, Amir Gholami",
    conference: "Preprint, 2023 (Short Version at ISCA ASSYST Workshop 2023)",
    selected: false,
  },
  {
    imagePath: "img/thumbnails/bild.png",
    title: "Speculative Decoding with Big Little Decoder",
    pdfLink: "https://arxiv.org/pdf/2302.07863.pdf",
    codeLinks: { Code: "https://github.com/kssteven418/BigLittleDecoder" },
    authors:
      "<b>Sehoon Kim</b>, Karttikeya Mangalam, Suhong Moon, Jitendra Malik, Michael W. Mahoney, Amir Gholami, Kurt Keutzer",
    conference:
      "Conference on Neural Information Processing Systems (NeurIPS), 2023",
    selected: true,
  },
  {
    imagePath: "img/thumbnails/sqfm.png",
    title:
      "Squeezeformer: An Efficient Transformer for Automatic Speech Recognition",
    pdfLink: "https://arxiv.org/pdf/2206.00888.pdf",
    codeLinks: {
      Code: "https://github.com/kssteven418/Squeezeformer",
      "NVIDIA NeMo":
        "https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/asr/models.html#squeezeformer-ctc",
    },
    authors:
      "<b>Sehoon Kim*</b>, Amir Gholami*, Albert Shaw†, Nicholas Lee†, Karttikeya Mangalam, Jitendra Malik, Michael W. Mahoney, Kurt Keutzer",
    conference:
      "Conference on Neural Information Processing Systems (NeurIPS), 2022",
    selected: true,
  },
  {
    imagePath: "img/thumbnails/ptp.png",
    title: "A Fast Post-Training Pruning Framework for Transformers",
    pdfLink: "https://arxiv.org/pdf/2204.09656.pdf",
    codeLinks: {
      Code: "https://github.com/WoosukKwon/retraining-free-pruning",
    },
    authors:
      "Woosuk Kwon*, <b>Sehoon Kim*</b>, Michael W. Mahoney, Joseph Hassoun, Kurt Keutzer, Amir Gholami",
    conference:
      "Conference on Neural Information Processing Systems (NeurIPS), 2022",
    selected: true,
  },
  {
    imagePath: "img/thumbnails/ltp.png",
    title: "Learned Token Pruning for Transformers",
    pdfLink: "https://arxiv.org/pdf/2107.00910.pdf",
    codeLinks: { Code: "https://github.com/kssteven418/LTP" },
    authors:
      "<b>Sehoon Kim*</b>, Sheng Shen*, David Thorsley*, Amir Gholami*, Woosuk Kwon, Joseph Hassoun, Kurt Keutzer",
    conference: "Conference on Knowledge Discovery and Data Mining (KDD), 2022",
    selected: true,
  },
  {
    imagePath: "img/thumbnails/q-asr.png",
    title:
      "Integer-only Zero-shot Quantization for Efficient Speech Recognition",
    pdfLink: "https://arxiv.org/pdf/2103.16827.pdf",
    codeLinks: { Code: "https://github.com/kssteven418/Q-ASR" },
    authors:
      "<b>Sehoon Kim</b>, Amir Gholami, Zhewei Yao, Nicholas Lee, Patrick Wang, Anirudda Nrusimha, Bohan Zhai, Tianren Gao, Michael W. Mahoney, Kurt Keutzer",
    conference:
      "International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2022",
    selected: true,
  },
  {
    title: "Hessian-Aware Pruning and Optimal Neural Implant",
    pdfLink:
      "https://openaccess.thecvf.com/content/WACV2022/papers/Yu_Hessian-Aware_Pruning_and_Optimal_Neural_Implant_WACV_2022_paper.pdf",
    codeLinks: {
      Code: "https://github.com/yaozhewei/HAP",
    },
    authors:
      "Shixing Yu*, Zhewei Yao*, Amir Gholami*, Zhen Dong*, <b>Sehoon Kim</b>, Michael W. Mahoney, Kurt Keutzer",
    conference:
      "Winter Conference on Applications of Computer Vision (WACV), 2022",
    selected: false,
  },
  {
    title:
      "A Survey of Quantization Methods for Efficient Neural Network Inference",
    pdfLink: "https://arxiv.org/pdf/2103.13630.pdf",
    codeLinks: {},
    authors:
      "Amir Gholami*, <b>Sehoon Kim*</b>, Zhen Dong*, Zhewei Yao*, Michael W. Mahoney, Kurt Keutzer",
    conference:
      "Book Chapter: Low-Power Computer Vision: Improving the Efficiency of Artificial Intelligence, 2021",
    selected: false,
  },
  {
    title:
      "WindTunnel: Towards Differentiable ML Pipelines Beyond a Single Model",
    pdfLink: "https://www.vldb.org/pvldb/vol15/p11-yu.pdf",
    codeLinks: {},
    authors:
      "Gyeong-In Yu, Saeed Amizadeh, <b>Sehoon Kim</b>, Artidoro Pagnoni, Ce Zhang, Byung-Gon Chun, Markus Weimer, Matteo Interlandi",
    conference:
      "International Conference on Very Large Data Bases (VLDB), 2021",
    selected: false,
  },
  {
    title:
      "Terra: Imperative-Symbolic Co-Execution of Imperative Deep Learning Programs",
    pdfLink:
      "https://proceedings.neurips.cc/paper/2021/file/0b32f1a9efe5edf3dd2f38b0c0052bfe-Paper.pdf",
    codeLinks: {},
    authors:
      "Taebum Kim, Eunji Jeong, Geon-Woo Kim, Yunmo Koo, <b>Sehoon Kim</b>, Gyeong-In Yu, Byung-Gon Chun",
    conference:
      "Conference on Neural Information Processing Systems (NeurIPS), 2021",
    selected: false,
  },
  {
    imagePath: "img/thumbnails/i-bert.png",
    title: "I-BERT: Integer-only BERT Quantization",
    pdfLink: "http://proceedings.mlr.press/v139/kim21d/kim21d.pdf",
    codeLinks: {
      Code: "https://github.com/kssteven418/I-BERT",
      HuggingFace:
        "https://huggingface.co/docs/transformers/en/model_doc/ibert",
    },
    authors:
      "<b>Sehoon Kim*</b>, Amir Gholami*, Zhewei Yao*, Michael W. Mahoney, Kurt Keutzer",
    conference:
      "International Conference on Machine Learning (ICML, <b>Oral</b>), 2021",
    selected: true,
  },
  {
    title:
      "Memory-Efficient Hardware Performance Counters with Approximate-Counting Algorithms",
    pdfLink: "publications/xu2021-ispass.pdf",
    codeLinks: {},
    authors:
      "Jingyi Xu, <b>Sehoon Kim</b>, Borivoje Nikolic, Yakun Sophia Shao",
    conference:
      "International Symposium on Performance Analysis of Systems and Software (ISPASS), 2021",
    selected: false,
  },
];

export { publications };
